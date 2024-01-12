<script lang="ts">
	import { movieInfo } from '$lib/stores/selectedMovie.store';
	import { CurrentMood } from '$lib/stores/currentMood.store';
	import { DesiredMood } from '$lib/stores/desiredMood.store';
	import { getMovieInfo } from '$lib/requests/getMovieInfo';
	import { onDestroy } from 'svelte';

	const fetchMovieData = () => {
		getMovieInfo($CurrentMood, $DesiredMood);
	};

	const des = DesiredMood.subscribe((val) => {
		if ($CurrentMood !== '' && val !== '') {
			fetchMovieData();
		}
	});
	const cur = CurrentMood.subscribe((val) => {
		if ($DesiredMood !== '' && val !== '') {
			fetchMovieData();
		}
	});
	onDestroy(() => {
		des();
		cur();
	});
</script>

{#if $DesiredMood !== '' && $CurrentMood !== '' && $movieInfo !== null}
	<div class="movie-selection">
		<h1>{$movieInfo.original_title}</h1>
		<h2>{$movieInfo.overview}</h2>
		<img alt="movie backdrop" src={$movieInfo.backdrop_path} />
		<img alt="movie poster" src={$movieInfo.poster_path} />
		<div class="production-company-wrapper">
			{#each $movieInfo.production_companies as company}
				<h3 class="genre">{company.name}</h3>
				<img alt="production company logo" src={company.logo_path} />
			{/each}
		</div>
		<div class="genre-wrapper">
			{#each $movieInfo.genres as genre}
				<h3 class="genre">{genre.name}</h3>
			{/each}
		</div>
		<h3 class="runtime">Runtime: {$movieInfo.runtime} minutes</h3>
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
