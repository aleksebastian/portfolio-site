<script>
	import { run } from 'svelte/legacy';

	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaEnvelopeSquare from 'svelte-icons/fa/FaEnvelopeSquare.svelte';
	import FaCaretSquareDown from 'svelte-icons/fa/FaCaretSquareDown.svelte';

	let { current } = $props();
	const unselectedLinkClass = 'transition ease-in-out text-lg hover:text-[#1565c0]';
	const selectedLinkClass = 'text-lg text-[#1976d2] dark:text-blue-200 underline';

	let y = $state();
	let scrolled = $state(false);
	let navScrollClass = $state();
	let leftMostIconScrollClass = $state();
	let rightMostIconScrollClass = $state();
	let middleIconScrollClass = $state();
	let arrowIconClass = $state();
	let pageLinksClass = $state();
	let logoClass = $state();
	let linksWrapperClass = $state();
	let linksContainerHeight = $state();

	$effect.pre(() => {
		if (y > 55) {
			linksContainerHeight = 'h-[3rem]';
			navScrollClass = 'pt-4 pb-1 shadow-md dark:bg-[#1e1e1e] rounded-b-lg ';
			leftMostIconScrollClass = 'translate-x-[88px] opacity-0';
			middleIconScrollClass = 'translate-x-[44px] opacity-0';
			rightMostIconScrollClass = 'opacity-0';
			scrolled = true;
			arrowIconClass = 'block absolute translate-y-[5px]';
			pageLinksClass = 'translate-x-[-50px] translate-y-[-40px] right-[30px] ';
			logoClass = 'w-10 h-10';
			linksWrapperClass = 'group';
		} else {
			navScrollClass = 'dark:bg-[#121212] py-4';
			leftMostIconScrollClass = '';
			middleIconScrollClass = '';
			rightMostIconScrollClass = '';
			scrolled = false;
			arrowIconClass = 'hidden';
			pageLinksClass = '';
			logoClass = 'w-20 h-20';
			linksWrapperClass = '';
			linksContainerHeight = '';
		}
	});
</script>

<svelte:window bind:scrollY={y} />

<nav
	class={`left-0 top-0 mx-auto fixed z-10 flex justify-between bg-white/95 backdrop-blur box-s dark:text-white w-full mb-12 dark:bg-[#121212]/95`}
>
	<div
		class={`ease-in-out delay-100 transition-all duration-300 w-full max-w-screen-2xl mx-auto px-4 flex justify-between ${navScrollClass}`}
	>
		<a
			href="/"
			class={`${logoClass} transition-all duration-500 ease-in-out will-change-transform`}
		>
			<img
				width="158"
				height="144"
				class={`w-full h-auto dark:invert `}
				src="/logo.png"
				alt="Alek Ortiz logo"
			/>
		</a>
		<div class={`self-end ${linksContainerHeight}`}>
			<div class={`flex justify-end gap-5  pb-5 ${linksWrapperClass}`}>
				<a
					aria-label="Link to linkedin"
					href="https://linkedin.com/in/alek-ortiz/"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 hover:scale-110 transition-all duration-200 ease-in-out will-change-transform hover:text-[#1565c0] group-hover:translate-y-[98px] group-hover:opacity-100 group:hover:absolute ${leftMostIconScrollClass}`}
				>
					<FaLinkedin />
				</a>
				<a
					aria-label="Link to github"
					href="https://github.com/aleksebastian"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 hover:scale-110 transition-all duration-500 ease-in-out  hover:text-[#1565c0] group-hover:translate-y-[68px] group-hover:opacity-100 ${middleIconScrollClass}`}
				>
					<FaGithubSquare />
				</a>
				<a
					aria-label="Link to email"
					href="mailto:aleksebastian@outlook.com"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 hover:scale-110 transition-all duration-500 ease-in-out  hover:text-[#1565c0] group-hover:translate-y-[38px] group-hover:opacity-100 ${rightMostIconScrollClass}`}
				>
					<FaEnvelopeSquare />
				</a>
				<a
					aria-label="Link to email"
					href="mailto:aleksebastian@outlook.com"
					target="_blank"
					rel="noopener noreferrer"
					class={`w-6 h-6 transition duration-300 ease-in-out display-none ${arrowIconClass}`}
				>
					<FaCaretSquareDown />
				</a>
			</div>
			<div class={`flex gap-5 transition-all duration-500 ease-in-out  pb-2 ${pageLinksClass}`}>
				<a class={current === '/' ? selectedLinkClass : unselectedLinkClass} href="/">Projects</a>
				<a class={current === '/resume' ? selectedLinkClass : unselectedLinkClass} href="/resume"
					>Resume</a
				>
				<a class={current === '/contact' ? selectedLinkClass : unselectedLinkClass} href="/contact"
					>Contact</a
				>
			</div>
		</div>
	</div>
</nav>
