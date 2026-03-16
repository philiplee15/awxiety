export interface Project {
	slug: string;
	title: string;
	description: string;
	context: string;
	url: string;
	tech: string[];
	year: string;
}

/** Add new projects here — each gets its own route at /projects/[slug] */
export const projects: Project[] = [
	{
		slug: 'example-project',
		title: 'Example Project',
		description: 'A sample project to demonstrate the portfolio structure.',
		context:
			'Built as a proof of concept for modern web architecture. Features real-time updates and a clean API layer.',
		url: 'https://example.com',
		tech: ['Svelte', 'TypeScript', 'Node.js'],
		year: '2024'
	}
	// Add more projects above — copy the object and change slug, title, etc.
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
