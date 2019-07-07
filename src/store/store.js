
import { writable } from 'svelte/store';

function createToggle() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toggle: () => update(v => !v)
	};
}

export const visible = createToggle()