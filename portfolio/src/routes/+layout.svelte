<script lang="ts">
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/stores/theme';
	import Nav from '$lib/components/Nav.svelte';
	import MouseGlow from '$lib/components/MouseGlow.svelte';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const unsub = themeStore.subscribe((theme) => {
			document.documentElement.setAttribute('data-theme', theme);
		});
		return unsub;
	});
</script>

<svelte:head>
	<link rel="icon" href="/awx-logo-name.png" type="image/png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
	<title>Awxiety | Philip Lee</title>
</svelte:head>

<div class="app">
	<Nav />
	<main>
		{@render children()}
	</main>
</div>

<MouseGlow />
