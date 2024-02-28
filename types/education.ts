export type EducationType = {
	id: string;
	school: string;
	degree: string;
	field: string;
	startYear: number;
	endYear: number;
	grade: number;
	description: string;
};

export type EducationSubmitType = {
	id: string;
	school: { label: string; value: string };
	degree: { label: string; value: string };
	field: { label: string; value: string };
	startYear: number;
	endYear: number;
	grade: number;
	description: string;
};

export type UniversityType = {
	"state-province": string;
	alpha_two_code: string;
	country: string;
	web_pages: string[];
	domains: string[];
};
