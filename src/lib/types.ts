export interface PortfolioProject {
	name: string;
	url: string;
	homepage: string | null;
	description: string | null;
	coverImage: string;
	topics: string[];
	year?: string;
}

export interface DateRange {
	start: string;
	end: string;
}

export interface Experience {
	title: string;
	company: string;
	dates: DateRange;
	description: string[];
}

export interface Education {
	school: string;
	degreeName: string;
	dates: DateRange;
	distinctions: string[];
}

export interface Skill {
	category: string;
	names: string[];
}

export interface Resume {
	heroAbout: string;
	experience: Experience[];
	education: Education[];
	skills: Skill[];
}
