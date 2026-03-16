<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav class="nav">
	<a href="/" class="nav-brand" class:active={$page.url.pathname === '/'}>Philip Lee</a>
	<div class="nav-links">
		<a href="/#work" class="nav-link">Work</a>
		<ThemeToggle />
	</div>
</nav>
