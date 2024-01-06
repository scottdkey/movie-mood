<script lang="ts">
	import { theme as Theme, theme, type ThemeVal } from '$lib/stores/theme';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => {
		const systemDarkMode =
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (systemDarkMode) {
			theme.set('dark');
		}
	});

	async function submitUpdateTheme(updateTheme: ThemeVal): Promise<void> {
		Theme.set(updateTheme);
	}
	const unsubscribe = Theme.subscribe((val) => {
		Theme.set(val);
	});
	onDestroy(() => {
		unsubscribe();
	});
</script>

<button
	on:click={(e) => {
		e.preventDefault();
		submitUpdateTheme('light');
	}}
>
	light
</button>
<button
	on:click={(e) => {
		e.preventDefault();
		submitUpdateTheme('dark');
	}}
>
	dark
</button>
