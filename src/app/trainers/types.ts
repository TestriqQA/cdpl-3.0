export type Socials = {
linkedin?: string;
x?: string;
github?: string;
website?: string;
};


export type Trainer = {
id: string;
name: string;
title: string;
bio: string;
location?: string;
avatar?: string; // Next/Image path or absolute URL
yearsExp?: number;
skills: string[];
certifications?: string[];
socials?: Socials;
};
