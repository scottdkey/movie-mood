<script lang="ts">
	import { movieInfo } from '../lib/stores/selectedMovie.store';
</script>

<div class="wrapper">
	<h4 class="title">Genres</h4>
	{#if $movieInfo !== null}
		<div class="genre-wrapper">
			{#each $movieInfo.genres as genre}
				<h3 class="genre">{genre.name}</h3>
			{/each}
		</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		text-align: left;
	}
	.title {
		margin-left: 10px;
		margin-bottom: 0px;
	}
	.genre-wrapper {
		display: flex;
		margin: 2px;
	}
	.genre {
		background-color: var(--light);
		padding: 8px;
		border-radius: 15px;
		margin-left: 10px;
		margin-right: 10px;
	}
</style>
