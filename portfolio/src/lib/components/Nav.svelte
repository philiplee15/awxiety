<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="nav">
	<a href="/" class="nav-brand" class:active={$page.url.pathname === '/'}>
		<img src="/awx-logo-name.png" alt="Philip Lee" class="nav-logo" />
	</a>
	<div class="nav-links">
		<a href="/#work" class="nav-link">Projects</a>
		<a href="/#resume" class="nav-link">Resume</a>
		<ThemeToggle />
	</div>
</nav>
