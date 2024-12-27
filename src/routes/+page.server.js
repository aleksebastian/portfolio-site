import { GITHUB_TOKEN } from '$env/static/private';

async function fetchRepositories(username) {
	const url = `https://api.github.com/users/${username}/repos`;
	const res = await fetch(url, {
		headers: {
			Authorization: `token ${GITHUB_TOKEN}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	if (!res.ok) {
		throw new Error(JSON.stringify(res));
	}

	const data = await res.json();
	return data;
}

export async function load({ setHeaders }) {
	const username = 'aleksebastian';

	try {
		const repos = await fetchRepositories(username);
		const portfolioRepos = repos
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.map((repo) => ({
				username: username,
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
		const resError = JSON.parse(err.message);

		const errorCard = [
			{
				username: username,
				name: `Bummer! Got a ${resError.status} while fetching my projects from github`,
				homepage: '',
				url: 'https://github.com/aleksebastian',
				description:
					'While things come back online, feel free to click on the link below to go see my projects Github profile',
				coverImage: `https://res.cloudinary.com/blitva/image/upload/v1635379036/Project%20screenshots/error_mdjl8k.webp`
			}
		];

		return { errorCard };
	}
}
