import { GITHUB_TOKEN } from '$app/env/private';
import type { PortfolioProject, Resume } from '#lib/types.js';
import resumeData from '#lib/data/resume.json';
import { site } from '#lib/site.js';
import type { PageServerLoad } from './$types';

interface GithubResponse {
	name: string;
	html_url: string;
	homepage: string | null;
	description: string | null;
	topics: string[];
	default_branch: string;
	updated_at: string;
	created_at: string;
}

class GithubRequestError extends Error {
	status: number;

	constructor(status: number) {
		super(`GitHub responded with ${status}`);
		this.status = status;
	}
}

const resume = resumeData satisfies Resume;

async function fetchRepositories(username: string): Promise<GithubResponse[]> {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github+json',
		'X-GitHub-Api-Version': '2022-11-28'
	};
	// Public repos are readable anonymously; the token only raises the rate limit.
	if (GITHUB_TOKEN) headers.Authorization = `Bearer ${GITHUB_TOKEN}`;

	const res = await fetch(
		`https://api.github.com/users/${username}/repos?per_page=100&type=owner`,
		{
			headers,
			signal: AbortSignal.timeout(5000)
		}
	);

	if (!res.ok) {
		throw new GithubRequestError(res.status);
	}

	return res.json();
}

export const load: PageServerLoad = async ({ setHeaders }) => {
	const username = site.githubUsername;

	try {
		const repos = await fetchRepositories(username);
		const projects: PortfolioProject[] = repos
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
			.map((repo) => ({
				name: repo.name,
				url: repo.html_url,
				homepage: repo.homepage,
				description: repo.description,
				coverImage: `https://cdn.jsdelivr.net/gh/${username}/${repo.name}@${repo.default_branch}/mockup.webp`,
				topics: repo.topics.filter((topic) => topic !== 'portfolio-project'),
				year: new Date(repo.created_at).getFullYear().toString()
			}));

		setHeaders({
			// Cache at the edge for 30 minutes so visitors don't each hit the GitHub API.
			'cache-control': 'public, max-age=0, s-maxage=1800, stale-while-revalidate=86400'
		});

		return { projects, projectsError: false, resume };
	} catch (err) {
		const name =
			err instanceof GithubRequestError
				? `Bummer! Got a ${err.status} while fetching my projects from github`
				: "Bummer! Couldn't reach github to fetch my projects";

		const errorCard: PortfolioProject = {
			name,
			homepage: null,
			url: site.links.github,
			description:
				'While things come back online, feel free to click on the link below to go see my projects Github profile',
			coverImage: `https://res.cloudinary.com/blitva/image/upload/v1635379036/Project%20screenshots/error_mdjl8k.webp`,
			topics: []
		};

		return { projects: [errorCard], projectsError: true, resume };
	}
};
