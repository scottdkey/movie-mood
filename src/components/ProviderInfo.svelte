<script lang="ts">
	import { providerInfo, movieInfo } from '$lib/stores/selectedMovie.store';
	import { onDestroy, onMount } from 'svelte';
	import { getProviderInfo } from '../lib/requests/getProviderInfo';

	const unsubscribe = movieInfo.subscribe(async (movie) => {
		const id = movie?.id;
		if (id) {
			await getProviderInfo(`${id.toString()}-${movie.original_title.toLowerCase()}`);
		}
	});
	onDestroy(() => {
		unsubscribe;
	});
</script>

{#if $providerInfo !== null}
	<div>provider info</div>
	<pre>{JSON.stringify($providerInfo)}</pre>
{/if}
