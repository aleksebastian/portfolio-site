import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').PageServerLoad} */
export async function load() {
	const username = 'aleksebastian';
	const url = `https://api.github.com/users/${username}/repos`;
	const res = await fetch(url);
	if (res.ok) {
		const data = await res.json();
		const portfolioRepos = data
			.filter((repo) => repo.topics.includes('portfolio-project'))
			.map((repo) => ({
				username: username,
				name: repo.name,
				url: repo.html_url,
				homepage: repo.homepage,
				description: repo.description,
				coverImage: `https://cdn.jsdelivr.net/gh/${username}/${repo.name}@main/mockup.webp`
			}));
		return { portfolioRepos };
	} else {
		const errorInfo = [
			{
				username: username,
				name: 'Unable to fetch projects from Github',
				url: 'https://github.com/aleksebastian',
				homepage: '',
				description: 'You can click on this card to go see my projects in Github',
				coverImage: `https://res.cloudinary.com/blitva/image/upload/v1635379036/Project%20screenshots/error_mdjl8k.webp`
			}
		];

		throw error(500, errorInfo);
	}
}
