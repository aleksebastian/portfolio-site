<script>
	import { fade, fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<div in:fade>
	<div class="flex flex-col items-center mb-10">
		<h1 class="text-5xl mb-3">Alek Ortiz</h1>
		<span class="text-sm sm:text-xl">Software Engineer | Full-Stack Web Developer</span>
		<div class="flex flex-col md:flex-row">
			<span class="pr-1"
				><a
					class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
					href="https://aleksebastian.dev/"
					target="_blank">aleksebastian.dev</a
				> <span class="invisible md:visible">|</span></span
			>
			<span class="pr-1"
				>Github <a
					class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
					href="https://github.com/aleksebastian"
					target="_blank">@aleksebastian</a
				>
				<span class="invisible md:visible">|</span></span
			>
			<span class="pr-1"
				><a
					class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
					href="https://linkedin.com/in/alek-ortiz/"
					target="_blank">LinkedIn</a
				> <span class="invisible md:visible">|</span></span
			>
			<span class="pr-1"
				><a
					class="underline text-blue-500 hover:text-blue-700 visited:text-purple-500"
					href="mailto:aleksebastian@outlook.com"
					target="_blank">aleksebastian</a
				> at outlook</span
			>
		</div>
	</div>

	<div class="grid gap-10 lg:grid-cols-2 lg:mx-8">
		<div>
			<h1 class="text-3xl md:text-4xl col-start-1 mb-5">About me</h1>
			<span class="col-start-1"
				>I am a full-stack software engineer with 2 years of experience in JavaScript, Node.js, and
				strong skills using the MERN stack.</span
			>

			<h1 class="text-3xl md:text-4xl col-start-1 mb-2 mt-10">Experience</h1>
			<div class="flex justify-between flex-col sm:flex-row mb-1">
				<span class="text-xl col-start-1">Full-Stack Web Developer</span>
				<span class="pr-10">Dec 2020 – Apr 2021</span>
			</div>
			<p class="col-start-1 mt-4">SOFTWARE ENGINEERING APPLICATIONS</p>
			<p class="col-start-1 mt-4">Blitvazon | Amazon-Styled Photos Microservice & Proxy Server</p>
			<p class="col-start-1 text-sm mb-2">
				TECH STACK - React | Styled-Components | Express | Node | mongoDB
			</p>
			<ul class="col-start-1 list-disc list-outside pl-5">
				<li>
					Developed the front-end for photos and checkout microservices to integrate with other
					services via a REST API following an Agile methodology.
				</li>
				<li>
					Developed interactive microservices using React and styled-components to modularize CSS
					and ensure smooth integration with other microservices.
				</li>
				<li>
					Implemented testing with Jest/Enzyme to ensure the stability of the react components under
					various types of application states and user scenarios.
				</li>
				<li>Deployed microservice by implementing a CircleCI pipeline into an AWS EC2 instance.</li>
			</ul>

			<p class="col-start-1 mt-8">Spacework | Wework-Styled SOA Photos Database & Proxy Server</p>
			<p class="col-start-1 text-sm  mb-2">
				TECH STACK - CouchDb | Redis | NGINX | Express | Node | New Relic | Loader.io
			</p>
			<ul class="col-start-1 list-disc list-outside pl-5">
				<li>
					Designed and horizontally scaled the photos microservice back-end from an inherited
					codebase to handle large amounts of traffic while ensuring system availability and
					conforming to the RESTful API architectural style.
				</li>
				<li>
					Benchmarked database CRUD operations to optimize latency and performed stress testing on
					deployed service’s REST API to review and optimize the service’s latency, throughput, and
					error rate.
				</li>
				<li>
					Configured a Redis cache with an LFU cache eviction policy for faster read operations that
					averaged less than 50ms.
				</li>
				<li>
					Optimized availability of the service under load by configuring an NGINX reverse proxy to
					avoid unnecessary database reads by implementing a micro-caching strategy to avoid serving
					stale data to the client resulting in a 2600% RPS increase with sub 1200ms response times
					and a 0% error rate under stress.
				</li>
				<li>Deployed dockerized database, server, and proxy containers on AWS EC2 instances.</li>
			</ul>

			<!-- <p class="text-3xl col-start-1">Title and dates</p>
    <span class="col-start-1">Location</span>
    <span class="col-start-1">Name of Projects</span>
    <span class="col-start-1">Tech Stack</span>
    <ul class="col-start-1 list-disc list-inside">
      <li>Job description bullet points go here</li>
      <li>Job description bullet points go here</li>
      <li>Job description bullet points go here</li>
    </ul> -->

			<h1 class="text-3xl md:text-4xl col-start-1 mb-5 mt-10">Education</h1>
			<div class="col-start-1 flex justify-between flex-col sm:flex-row">
				<span class="text-xl col-start-1">Hack Reactor</span>
				<span class="pr-10">Sept 2020 – Dec 2020</span>
			</div>
			<span class="col-start-1 text-sm">ADVANCED SOFTWARE ENGINEERING IMMERSIVE PROGRAM</span>

			<div class="col-start-1 flex justify-between flex-col sm:flex-row mt-6">
				<span class="text-xl col-start-1">Austin Community College</span>
				<span class="pr-10">Jan 2017 – May 2019</span>
			</div>
			<span class="col-start-1 text-sm">ASSOCIATE OF SCIENCE IN BUSINESS ADMINISTRATION</span>
		</div>

		<div
			class="md:col-start-2 md:row-start-1 md:pl-4 md:border-light-blue-700 md:border-l-2 md:border-solid"
		>
			<h1 class="text-3xl md:text-4xl mb-5">Skills</h1>
			<div class="pl-1">
				<p class="mt-5 text-xl">Front-end</p>
				<p>JavaScript</p>
				<p>React</p>
				<p>Svelte</p>
				<p>jQuery</p>
				<p>HTML5</p>
				<p>CSS</p>
				<p class="mt-5 text-xl">Back-end</p>
				<p>NodeJS</p>
				<p>REST APIs</p>
				<p>noSQL</p>
				<p>SQL</p>
				<p>NGINX</p>
				<p class="mt-5 text-xl">Deployment &</p>
				<p class=" text-xl">Workflow</p>
				<p>AWS</p>
				<p>Heroku</p>
				<p>Docker</p>
				<p>Jira</p>
				<p>Trello</p>
			</div>
		</div>
	</div>
</div>
