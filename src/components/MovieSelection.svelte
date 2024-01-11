<script lang="ts">
	import { writable } from 'svelte/store';
	import { CurrentMood } from '../lib/stores/currentMood.store';
	import { DesiredMood } from '../lib/stores/desiredMood.store';

	export const selectedMovie = writable<{
		movieInfo: MovieInfo;
		providerInfo: ProviderInfo;
	} | null>(null);
	const getData = async () => {
		const res = await fetch('/api/movie/872585-oppenheimer');
		const parsed = await res.json();
		console.log(parsed);
		selectedMovie.set(parsed);
	};
</script>

{#if $DesiredMood !== '' && $CurrentMood !== ''}
	<div class="movie-selection">
		you're {$CurrentMood} and want a movie to make you {$DesiredMood}
		<h1>{$selectedMovie && $selectedMovie.movieInfo.original_title}</h1>
		<pre>{JSON.stringify($selectedMovie, null, 2)}</pre>
		{#if $DesiredMood !== '' && $CurrentMood !== ''}
			{getData()}
		{/if}
	</div>
{/if}

<style>
	.movie-selection {
		margin-top: 40px;
		text-align: center;
		vertical-align: center;
		color: var(--font-color);
		font-size: 20px;
		overflow: visible;
		height: fit-content;
	}
</style>
