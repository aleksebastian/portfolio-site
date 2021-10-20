const experience = [
	{
		title: 'Full-Stack Web Developer',
		company: 'RECENT SOFTWARE ENGINEERING APPLICATIONS',
		dates: { start: 'Dec 2020', end: 'Apr 2021' },
		description: [],
		projects: [
			{
				name: 'Blitvazon | Amazon-Styled Photos Microservice & Proxy Server',
				techStack: ['React', 'Styled-Components', 'Express', 'Node', 'MongoDB'],
				description: [
					'Developed the front-end for photos and checkout microservices to integrate with other services via a proxy server utilizing REST APIs to share data across services, following an Agile methodology to ensure smooth integration.',
					'Utilized React to build encapsulated components and styled-components to modularize CSS and avoid competing classes amongst services.',
					'Implemented unit testing with Jest/Enzyme to ensure the stability of the React components under various types of application states.',
					'Deployed microservice by implementing a CircleCI pipeline into an AWS EC2 instance.'
				]
			},
			{
				name: 'Spacework | Wework-Styled SOA Photos Database & Proxy Server',
				techStack: ['CouchDb', 'Redis', 'NGINX', 'Express', 'Node', 'New Relic', 'Loader.io'],
				description: [
					'Designed and horizontally scaled the photos microservice back-end system from an inherited codebase to handle large amounts of traffic to preserve system availability, conforming to the RESTful API architectural style.',
					'Benchmarked database CRUD operations to optimize latency and performed stress testing on the deployed service REST API. Resulting in optimal service latency, throughput, and error rate.',
					'Configured a Redis cache with an LFU cache eviction policy for faster read operations that averaged less than 50ms.',
					'Optimized the availability of the service under stress by implementing an NGINX reverse proxy to avoid unnecessary database reads with a micro-caching configuration to avoid serving stale data to the client resulting in a 2600% RPS increase with sub 1200ms response times and a 0% error rate under stress.',
					'Deployed dockerized database, server, and proxy containers into a cluster of AWS EC2 instances.'
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
			'Perform end-to-end testing for newly released platform (PEMS) to identify bugs across the stack and ensure contract requirements are being met.',
			"Perform PEMS platform user-testing to identify issues and bugs in the front-end by staging different application scenarios and testing the system capabilities and stability from a user's perspective.",
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
		distinctions: [],
		description: []
	},
	{
		school: 'Austin Community College',
		degreeName: 'ASSOCIATE OF SCIENCE IN BUSINESS ADMINISTRATION',
		dates: { start: 'Jan 2017', end: 'May 2019' },
		distinctions: ['GPA 3.7', 'Member of the Honors Program'],
		description: []
	}
];

const skills = [
	{
		category: 'Front-end',
		names: ['JavaScript', 'React', 'SvelteKit', 'jQuery', 'HTML5', 'CSS']
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
