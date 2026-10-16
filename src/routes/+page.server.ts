import { GITHUB_TOKEN } from '$app/env/private';
import type { PortfolioProject } from '#lib/types.js';
import resumeData from '#lib/data/resume.json';
import type { PageServerLoad } from './$types';

interface GithubResponse {
	name: string;
	html_url: string;
	homepage: string | null;
	description: string | null;
	topics: string[];
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

async function fetchRepositories(username: string): Promise<GithubResponse[]> {
	const url = `https://api.github.com/users/${username}/repos?per_page=100&visibility=public`;
	const res = await fetch(url, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
			Accept: 'application/vnd.github+json',
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	if (!res.ok) {
		throw new GithubRequestError(res.status);
	}

	return res.json();
}

export const load: PageServerLoad = async ({ setHeaders }) => {
	const username = 'aleksebastian';

	try {
		const repos = await fetchRepositories(username);
		const portfolioRepos: PortfolioProject[] = repos
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
			.map((repo) => ({
				username,
				name: repo.name,
				url: repo.html_url,
				homepage: repo.homepage,
				description: repo.description,
				coverImage: `https://cdn.jsdelivr.net/gh/${username}/${repo.name}@main/mockup.webp`,
				topics: repo.topics.filter((topic) => topic !== 'portfolio-project'),
				year: new Date(repo.created_at).getFullYear().toString()
			}));

		setHeaders({
			'cache-control': 'public, max-age=1800' // 30 minutes
		});

		return { portfolioRepos, resumeData };
	} catch (err) {
		const name =
			err instanceof GithubRequestError
				? `Bummer! Got a ${err.status} while fetching my projects from github`
				: "Bummer! Couldn't reach github to fetch my projects";

		const errorCard: PortfolioProject[] = [
			{
				username,
				name,
				homepage: '',
				url: 'https://github.com/aleksebastian',
				description:
					'While things come back online, feel free to click on the link below to go see my projects Github profile',
				coverImage: `https://res.cloudinary.com/blitva/image/upload/v1635379036/Project%20screenshots/error_mdjl8k.webp`,
				topics: []
			}
		];

		return { errorCard, resumeData };
	}
};
