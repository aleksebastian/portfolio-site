import { GITHUB_TOKEN } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

interface GithubResponse {
	name: string;
	html_url: string;
	homepage: string | null;
	description: string | null;
	topics: string[];
	updated_at: string;
}

interface ResponseHeaders {
	'cache-control': string;
}

interface PortfolioProject {
	username: string;
	name: string;
	url: string;
	homepage: string | null;
	description: string | null;
	coverImage: string;
	topics: string[];
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
		throw new Error(JSON.stringify(res));
	}

	return res.json();
}

export const load = async ({ setHeaders }: { setHeaders: (headers: ResponseHeaders) => void }) => {
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
				topics: repo.topics.filter((topic) => topic !== 'portfolio-project')
			}));

		setHeaders({
			'cache-control': 'public, max-age=1800' // 30 minutes
		});

		return { portfolioRepos };
	} catch (err) {
		const resError = JSON.parse((err as Error).message);

		const errorCard: PortfolioProject[] = [
			{
				username,
				name: `Bummer! Got a ${resError.status} while fetching my projects from github`,
				homepage: '',
				url: 'https://github.com/aleksebastian',
				description:
					'While things come back online, feel free to click on the link below to go see my projects Github profile',
				coverImage: `https://res.cloudinary.com/blitva/image/upload/v1635379036/Project%20screenshots/error_mdjl8k.webp`,
				topics: []
			}
		];

		return { errorCard };
	}
};
