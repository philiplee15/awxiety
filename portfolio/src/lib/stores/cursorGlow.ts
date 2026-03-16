import { writable } from 'svelte/store';

export interface CursorGlowState {
	enabled: boolean;
	x: number;
	y: number;
}

function createCursorGlowStore() {
	const { subscribe, update } = writable<CursorGlowState>({ enabled: true, x: 0, y: 0 });

	return {
		subscribe,
		toggle: () => update((s) => ({ ...s, enabled: !s.enabled })),
		setPosition: (x: number, y: number) => update((s) => ({ ...s, x, y }))
	};
}

export const cursorGlowStore = createCursorGlowStore();
