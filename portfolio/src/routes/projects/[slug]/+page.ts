import { getProjectBySlug } from '$lib/data/projects';

export function load({ params }) {
	const project = getProjectBySlug(params.slug);
	return { project };
}
