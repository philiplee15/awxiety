<script lang="ts">
	let { data } = $props();
	const project = $derived(data.project);
</script>

{#if project}
	<div class="project-detail">
		<a href="/#work" class="back-link">← Back to projects</a>
		{#if project.wordLogo}
			<img src={project.wordLogo} alt={project.title} class="project-word-logo" />
		{:else}
			<h1>{project.title}</h1>
		{/if}
		<div class="tech-pills">
			{#each project.tech as t}
				<span class="tech-pill">{t}</span>
			{/each}
		</div>
		<p class="description">{project.description}</p>
		<a href={project.url} target="_blank" rel="noopener noreferrer" class="cta">
			Visit site →
		</a>
	</div>
{:else}
	<div class="project-detail">
		<a href="/#work" class="back-link">← Back to projects</a>
		<h1>Project not found</h1>
		<p class="context">The project you're looking for doesn't exist.</p>
	</div>
{/if}
