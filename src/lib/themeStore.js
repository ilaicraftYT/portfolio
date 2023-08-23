import { writable } from 'svelte/store';
import { browser } from '$app/environment';

if (browser) {
	var stored = localStorage.getItem('isDark');
}

const isDark = writable(JSON.parse(stored ?? 'null'));

if (browser) {
	isDark.subscribe((value) => {
		localStorage.setItem('isDark', String(value));
	});
}

export { isDark };
