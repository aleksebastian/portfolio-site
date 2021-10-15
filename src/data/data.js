const experience = [
	{
		title: 'Full-Stack Web Developer',
		company: 'RECENT SOFTWARE ENGINEERING APPLICATIONS',
		dates: { start: 'Dec 2020', end: 'Apr 2021' },
		description: [],
		projects: [
			{
				name: 'Blitvazon | Amazon-Styled Photos Microservice & Proxy Server',
				techStack: ['React', 'Styled-Components', 'Express', 'Node', 'mongoDB'],
				description: [
					'Developed the front-end for photos and checkout microservices to integrate with other services via a REST API following an Agile methodology.',
					'Developed interactive microservices using React and styled-components to modularize CSS and ensure smooth integration with other microservices.',
					'Implemented testing with Jest/Enzyme to ensure the stability of the react components under various types of application states and user scenarios.',
					'Deployed microservice by implementing a CircleCI pipeline into an AWS EC2 instance.'
				]
			},
			{
				name: 'Spacework | Wework-Styled SOA Photos Database & Proxy Server',
				techStack: ['CouchDb', 'Redis', 'NGINX', 'Express', 'Node', 'New Relic', 'Loader.io'],
				description: [
					'Designed and horizontally scaled the photos microservice back-end from an inherited codebase to handle large amounts of traffic while ensuring system availability and conforming to the RESTful API architectural style.',
					'Benchmarked database CRUD operations to optimize latency and performed stress testing on deployed service’s REST API to review and optimize the service’s latency, throughput, and error rate.',
					'Configured a Redis cache with an LFU cache eviction policy for faster read operations that averaged less than 50ms.',
					'Optimized availability of the service under load by configuring an NGINX reverse proxy to avoid unnecessary database reads by implementing a micro-caching strategy to avoid serving stale data to the client resulting in a 2600% RPS increase with sub 1200ms response times and a 0% error rate under stress.',
					'Deployed dockerized database, server, and proxy containers on AWS EC2 instances.'
				]
			}
		]
	},
	{
		title: 'Provider Enrollment Specialist',
		company: 'ACCENTURE',
		dates: { start: 'Aug 2019', end: 'Present' },
		description: [
			'Maintain direct communication with the client to ensure satisfaction during the rollout of the new Vendor Drug Program project.',
			'Perform newly released platform end-to-end testing to identify bugs and ensure contact requirements are being met.',
			'Perform user-testing for the same platform to find issues and bugs within the system by staging different application scenarios and testing the system’s capabilities and stability.',
			'Manage system improvements related to changes in work instructions, procedures, and policies.',
			'Process medical provider applications and render TPIs for providers approved by the OIG.'
		],
		projects: []
	},
	{
		title: 'Delivery Driver',
		company: 'RICE2GO',
		dates: { start: 'Oct 2017', end: 'Aug 2019' },
		description: [
			'Managed delivery staff operations.',
			'Multitasked high volumes of work duties and tasks efficiently in a high-paced environment.'
		],
		projects: []
	}
];

const education = [
	{
		school: 'Hack Reactor',
		degreeName: 'ADVANCED SOFTWARE ENGINEERING IMMERSIVE PROGRAM',
		dates: { start: 'Sept 2020', end: 'Dec 2020' },
		description: []
	},
	{
		school: 'Austin Community College',
		degreeName: 'ASSOCIATE OF SCIENCE IN BUSINESS ADMINISTRATION',
		dates: { start: 'Jan 2017', end: 'May 2019' },
		description: []
	}
];

const skills = [
	{
		category: 'Front-end',
		names: ['JavaScript', 'React', 'Svelte', 'jQuery', 'HTML5', 'CSS']
	},
	{
		category: 'Back-end',
		names: ['NodeJS', 'REST APIs', 'noSQL', 'SQL', 'NGINX']
	},
	{
		category: 'Deployment & Workflow',
		names: ['AWS', 'Heroku', 'Docker', 'Jira', 'Trello']
	}
];

export { experience, education, skills };
