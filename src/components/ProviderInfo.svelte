<script lang="ts">
	import { providerInfo, movieInfo } from '$lib/stores/selectedMovie.store';
	import { onDestroy } from 'svelte';
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
	<a href={$providerInfo.link}>MovieDb Link</a>
	<h2>Rent</h2>
	<div class="rent-wrapper">
		{#each $providerInfo.buy as provider}
			<img class="provider-image" src={provider.logo_path} alt={provider.provider_name} />
		{/each}
	</div>
	<h2>Buy</h2>
	<div class="buy-wrapper">
		{#each $providerInfo.buy as provider}
			<img class="provider-image" src={provider.logo_path} alt={provider.provider_name} />
		{/each}
	</div>
{/if}

<style>
	.buy-wrapper {
		display: flex;
		flex-direction: row;
	}
	.provider-image {
		height: 50px;
		width: 50px;
		border-radius: 10%;
		margin: 5px;
	}
	.rent-wrapper {
		display: flex;
		flex-direction: row;
	}
</style>
