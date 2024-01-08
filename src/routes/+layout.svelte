<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import Acknowledgements from '../components/Acknowledgements.svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';
	import '../styles/global.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	onMount(() => {
		const themeVal = data.theme;

		if (themeVal === undefined) {
			const systemDarkMode =
				window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			theme.set(systemDarkMode ? 'dark' : 'light');
		} else {
			theme.set(data.theme);
		}
	});
</script>

<svelte:head>
	<meta />

	{#if $theme === 'light'}
		<link rel="stylesheet" href="/styles/light.theme.css" />
	{:else if $theme === 'dark'}
		<link rel="stylesheet" href="/styles/dark.theme.css" />
	{:else}
		<link rel="stylesheet" href="/styles/system.theme.css" />
	{/if}
</svelte:head>
<heading>
	<h1>Movie Mood</h1>
	<form method="POST" action="?/setTheme"></form>
</heading>

<body>
	<slot />
</body>

<footer>
	<Acknowledgements />
	<ThemeToggle />
</footer>

<style>
	h1 {
		background-color: var(--primary);
		color: var(--font-color);
		border-radius: 0px 0px 20px 20px;
		margin: 0px;
		text-align: center;
		vertical-align: middle;
		padding-top: 20px;
		max-height: 100px;
		padding-bottom: 40px;
	}

	footer {
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		width: 100%;
		flex-direction: row;
		justify-content: flex-end;
	}
</style>
