<script lang="ts">
	import { onMount } from 'svelte';
	import { getMovieData } from '../lib/requests/getMovieData';
	import { CurrentMood } from '../lib/stores/currentMood.store';
	import { DesiredMood } from '../lib/stores/desiredMood.store';
	import { selectedMovie } from '../lib/stores/selectedMovie.store';

	onMount(() => {
		getMovieData('872585-oppenheimer');
	});
</script>

{#if $DesiredMood !== '' && $CurrentMood !== '' && $selectedMovie !== null}
	<!-- {#if $selectedMovie !== null} -->
	<div class="movie-selection">
		<h1>{$selectedMovie.movieInfo.original_title}</h1>
		<h2>{$selectedMovie.movieInfo.overview}</h2>
		<img alt="movie backdrop" src={$selectedMovie?.movieInfo.backdrop_path} />
		<img alt="movie poster" src={$selectedMovie.movieInfo.poster_path} />
		<div class="production-company-wrapper">
			{#each $selectedMovie.movieInfo.production_companies as company}
				<h3 class="genre">{company.name}</h3>
				<img alt="production company logo" src={company.logo_path} />
			{/each}
		</div>
		<div class="genre-wrapper">
			{#each $selectedMovie.movieInfo.genres as genre}
				<h3 class="genre">{genre.name}</h3>
			{/each}
		</div>
		<h3 class="runtime">Runtime: {$selectedMovie.movieInfo.runtime} minutes</h3>
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
	.genre-wrapper {
		display: flex;
		margin: 2px;
	}
	.genre {
		margin: 2px;
	}
</style>
