import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme(): Theme {
	if (!browser) return 'dark';
	const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		setTheme: (value: Theme) => {
			set(value);
			if (browser) {
				localStorage.setItem(STORAGE_KEY, value);
				document.documentElement.setAttribute('data-theme', value);
			}
		},
		toggle: () => {
			update((t) => {
				const next = t === 'dark' ? 'light' : 'dark';
				if (browser) {
					localStorage.setItem(STORAGE_KEY, next);
					document.documentElement.setAttribute('data-theme', next);
				}
				return next;
			});
		}
	};
}

export const themeStore = createThemeStore();
