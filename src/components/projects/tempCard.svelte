<script>
	const ghProfileUrl = 'https://github.com/aleksebastian';
	const placeholderImgUrl =
		'https://res.cloudinary.com/blitva/image/upload/v1634794360/Project%20screenshots/comingsoon_stcck3.webp';
	const cardDescription =
		'More projects are making their way to the site. For now, click on this card to see some more of my projects in my Github profile.';

	let tempInfo = {
		name: '',
		url: ghProfileUrl,
		description: cardDescription,
		coverImage: placeholderImgUrl
	};
</script>

<a
	class="group flex flex-col justify-end w-72 h-72 overflow-hidden relative rounded
		background-white bg-mockup bg-cover bg-no-repeat"
	style="background-image: url({placeholderImgUrl});"
	href={tempInfo.url}
	rel="noopener"
	target="_blank"
	aria-label="Link to github repository"
>
	<div />
	<div
		class="bg-gradient-to-t from-black w-full h-full xl:top-full group-hover:top-0 transition-top duration-500 ease-in-out absolute flex flex-col justify-end p-4"
	>
		<h1 class=" text-2xl text-white mb-2">
			{tempInfo.name}
		</h1>
		<p class=" text-white mb-2">
			{tempInfo.description}
		</p>
		<p class="text-sm text-gray-400 -mb-2">Click to go to Github</p>
	</div>
</a>
