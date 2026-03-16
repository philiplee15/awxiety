export interface Project {
	slug: string;
	title: string;
	description: string;
	url: string;
	tech: string[];
	icon?: string;
	wordLogo?: string;
}

/** Add new projects here — each gets its own route at /projects/[slug] */
export const projects: Project[] = [
	{
		slug: 'vipixi',
		title: 'Vipixi',
		description: 'A collaborative pixelboard where a million pixels become a living, breathing work of art.',
		url: 'https://vipixi.com',
		tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Vercel', 'Stripe', 'Cloudify', 'Github Actions', 'Resend'],
		icon: '/projects/vipixi-icon.png',
		wordLogo: '/projects/vipixi-word.png'
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
