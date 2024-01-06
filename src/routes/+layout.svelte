<script lang="ts">
	import Acknowledgements from '../components/Acknowledgements.svelte';
	import Drawer from '../components/Drawer.svelte';
	import '../styles/global.css';
	import { theme } from '$lib/stores/theme';
	import Theme from '../components/Theme.svelte';
</script>

<svelte:head>
	<meta />
	{#if ($theme === 'light')}
		<link rel="stylesheet" href="/styles/light.theme.css" />
	{:else if $theme === 'dark'}
		<link rel="stylesheet" href="/styles/dark.theme.css" />
	{:else}
		<link rel="stylesheet" href="/styles/dark.theme.css" />
	{/if}
</svelte:head>
<heading>
	<h1>Movie Mood</h1>
	<Theme />
</heading>

<body>
	<slot />
</body>

<footer>
	<Drawer>
		<Acknowledgements />
	</Drawer>
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
</style>
