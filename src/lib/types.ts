export interface PortfolioProject {
	username: string;
	name: string;
	url: string;
	homepage: string | null;
	description: string | null;
	coverImage: string;
	topics: string[];
}

export interface DateRange {
	start: string;
	end: string;
}

export interface Project {
	name: string;
	techStack: string[];
	description: string[];
}

export interface Experience {
	title: string;
	company: string;
	dates: DateRange;
	description: string[];
	projects: Project[];
}

export interface Education {
	school: string;
	degreeName: string;
	dates: DateRange;
	distinctions: string[];
	description: string[];
}

export interface Skill {
	category: string;
	names: string[];
}

export interface Resume {
	aboutMe: string;
	experience: Experience[];
	education: Education[];
	skills: Skill[];
}

export type Route = '/' | '/resume' | '/contact';
