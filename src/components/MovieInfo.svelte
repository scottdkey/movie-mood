<script lang="ts">
	import { movieInfo } from '$lib/stores/selectedMovie.store';
	import { CurrentMood } from '$lib/stores/currentMood.store';
	import { DesiredMood } from '$lib/stores/desiredMood.store';
	import { getMovieInfo } from '$lib/requests/getMovieInfo';
	import { onDestroy } from 'svelte';
	import ProductionCompany from './ProductionCompany.svelte';
	import Genre from './Genres.svelte';
	import TitleAndSynopsis from './TitleAndSynopsis.svelte';

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
		<div class="header">
			<img class="movie-poster" alt="movie poster" src={$movieInfo.poster_path} />
			<TitleAndSynopsis />
		</div>
		<ProductionCompany />
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
		background-color: var(--lightest);
		& .header {
			display: flex;
			flex-direction: row;
			margin-left: 1em;
			margin-right: 1em;
			padding-top: 2em;

			& .movie-poster {
				display: block;
				border-radius: 5px;
				max-width: 200px;
				max-height: 250px;
				width: auto;
				height: auto;
				box-shadow: 3px 3px 3px var(--lighter);
			}
		}
	}
</style>
