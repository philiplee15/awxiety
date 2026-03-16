<script lang="ts">
	import { browser } from '$app/environment';
	import { cursorGlowStore } from '$lib/stores/cursorGlow';

	let rafId: number;

	function handleMouseMove(e: MouseEvent) {
		cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => {
			cursorGlowStore.setPosition(e.clientX, e.clientY);
		});
	}

	function handleClick(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const isInteractive =
			target.closest('a') ||
			target.closest('button') ||
			target.closest('[role="button"]') ||
			target.closest('input') ||
			target.closest('select') ||
			target.closest('textarea');
		if (!isInteractive) {
			cursorGlowStore.toggle();
		}
	}
</script>

<svelte:window
	onmousemove={handleMouseMove}
	onclick={handleClick}
/>

{#if browser && $cursorGlowStore.enabled}
	<div
		class="mouse-glow"
		style="left: {$cursorGlowStore.x}px; top: {$cursorGlowStore.y}px;"
		aria-hidden="true"
	></div>
{/if}
