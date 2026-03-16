<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<section class="hero" id="home">
	<div class="hero-content">
		<h1>Philip Lee</h1>
		<p class="tagline">Fullstack Developer</p>
		<div class="bio-block">
			<p class="bio">
				I love building web apps. My specialty is fullstack — equal parts front and back end.
				I work with most frontend frameworks: Next.js, React, Svelte, Vue, Angular, or even vanilla.
				Anything and everything JavaScript, TypeScript, and Python — I'm in.
			</p>
			<p class="bio">In the tech industry since 2017.</p>
		</div>
		<div class="tech">
			<span class="tech-tag">JavaScript</span>
			<span class="tech-tag">TypeScript</span>
			<span class="tech-tag">Python</span>
			<span class="tech-tag">Next.js</span>
			<span class="tech-tag">React</span>
			<span class="tech-tag">Svelte</span>
			<span class="tech-tag">Vue</span>
			<span class="tech-tag">Angular</span>
		</div>
	</div>
	<div class="hero-photo">
		<!-- Add your photo: put image in static/photo.jpg and use: <img src="/photo.jpg" alt="Philip Lee" /> -->
		<span>Photo</span>
	</div>
</section>

<section class="section" id="work">
	<h2 class="section-title">Pet Projects</h2>
	<div class="projects-grid">
		{#each projects as project (project.slug)}
			<a href="/projects/{project.slug}" class="project-card">
				<h3>{project.title}</h3>
				<p class="desc">{project.description}</p>
				<div class="tech-row">
					{#each project.tech as t}
						<span>{t}</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="section resume-section">
	<h2 class="section-title">Resume</h2>
	<div class="resume-placeholder">
		Coming soon — resume section will be added here.
	</div>
</section>
