<script lang="ts">
	import { movieInfo } from '$lib/stores/selectedMovie.store';
	import { CurrentMood } from '$lib/stores/currentMood.store';
	import { DesiredMood } from '$lib/stores/desiredMood.store';
	import { getMovieInfo } from '$lib/requests/getMovieInfo';
	import { onDestroy } from 'svelte';
	import ProductionCompany from './ProductionCompany.svelte';
	import Genre from './Genre.svelte';

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
			<div class="title-and-synopsis">
				<h1>{$movieInfo.original_title}</h1>
				<h4>{$movieInfo.overview}</h4>
				<h3 class="runtime">Runtime: {$movieInfo.runtime} minutes</h3>
			</div>
		</div>

		<div class="production-company-wrapper">
			{#each $movieInfo.production_companies as company}
				<ProductionCompany logoPath={company.logo_path} name={company.name} />
			{/each}
		</div>

		<div class="genre-wrapper">
			{#each $movieInfo.genres as genre}
				<Genre genre={genre.name} />
			{/each}
		</div>
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

			& .title-and-synopsis {
				text-align: left;
				margin-left: 1em;
				margin-bottom: 10px;
				margin-top: 0px;
				padding-top: 0px;
				vertical-align: top;
				height: 100%;
				& h4 {
					font-weight: 300;
				}
			}

			& .movie-poster {
				border-radius: 5px;
				max-width: 200px;
				box-shadow: 3px 3px 3px var(--lighter);
			}
		}
	}

	.genre-wrapper {
		display: flex;
		margin: 2px;
		& .genre {
			margin: 2px;
		}
	}

	.production-company-wrapper {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
</style>
