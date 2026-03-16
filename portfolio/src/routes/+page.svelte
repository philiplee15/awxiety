<script lang="ts">
	import { projects } from '$lib/data/projects';
</script>

<section class="hero" id="home">
	<div class="hero-content">
		<h1>Philip Lee</h1>
		<p class="tagline">Fullstack Creator</p>
		<div class="bio-block">
			<p class="bio">
				I am a seasoned fullstack engineer, equal parts frontend and backend, who specializes in bringing ideas, products, and visions to life.
				I am no designer, but I am a creative — always optimizing not just for performance, but also for experience and interaction:
				human to computer, human to product, and human to human.
			</p>
			<p class="bio">
				I'm an advocate of empathy-driven development. I've worked with many frameworks and pick up new ones quickly.
				I love to ideate, build, and execute. My specialty lies in taking ideas from prototype to production. Let's bring new ideas and visions to life together.
			</p>
			<p class="bio">In the tech industry since 2017.</p>
			<small>Awxiety is my personal brand and a portmanteau of "awkward" and "society". It represents my historically introverted and awkward nature that I have successfully grown from a weakness into a strength. And despite being seemingly opposing forces, I want to use them to build a strong community through passion and technology that lead towards a more inclusive society as a whole.</small>
		</div>
		<div class="tech">
			<span class="tech-tag">TypeScript | Javascript | Python</span>
			<span class="tech-tag">React | Next.js | Vue | Svelte | Angular | Django | Flask</span>
			<span class="tech-tag">Tailwind | Bootstrap | Material UI | Prime</span>
			<span class="tech-tag">PostgreSQL | MySQL | SQLite | MongoDB | GraphQL | Supabase</span>
			<span class="tech-tag">Sendgrid | Sendinblue | Sendwithus | Resend | Twilio</span>
			<span class="tech-tag">Vercel | Beanstalk | Serverless | Github Actions | Heroku | Jenkins</span>
			<span class="tech-tag">Linux | Ubuntu | MacOS | WSL2 | Gunicorn | Nginx</span>
			<span class="tech-tag">Anthropic Claude | OpenAI | Gemini | Composer</span>
			<span class="tech-tag">Azure | GCP | PyTorch | TensorFlow | Hugging Face | Chainlit | Langchain</span>
			<span class="tech-tag">ElasticSearch</span>
			<span class="tech-tag">S3</span>
			<span class="tech-tag">Redis</span>
			<span class="tech-tag">Cloudflare</span>
			<span class="tech-tag">Docker</span>
			<span class="tech-tag">AWS</span>
			<span class="tech-tag">Stripe</span>
			<span class="tech-tag">Cloudify</span>
		</div>
	</div>
	<div class="hero-photo">
		<img src="/photo.jpg" alt="Philip Lee" />
	</div>
</section>

<section class="section" id="work">
	<h2 class="section-title">Projects</h2>
	<div class="projects-grid">
		{#each projects as project (project.slug)}
			<a href="/projects/{project.slug}" class="project-card">
				{#if project.icon}
					<img src={project.icon} alt={project.title} class="project-card-icon" />
				{/if}
				<h3>{project.title}</h3>
			</a>
		{/each}
	</div>
</section>

<section class="section resume-section" id="resume">
	<h2 class="section-title">Resume</h2>
	<div class="resume-placeholder">
		<p>Coming soon — resume section will be added here.</p>
		<p>
			In the meantime, check out my
			<a href="https://www.linkedin.com/in/philipmoseslee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			for more info about me.
		</p>
	</div>
</section>
