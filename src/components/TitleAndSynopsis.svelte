<script lang="ts">
	import { movieInfo } from '../lib/stores/selectedMovie.store';
	import Genres from './Genres.svelte';
</script>

<div class="wrapper">
	{#if $movieInfo !== null}
		<div class="title-and-synopsis">
			<h1 class="title">{$movieInfo.original_title}</h1>
			<h4>{$movieInfo.overview}</h4>
			<h3 class="runtime">Runtime: {$movieInfo.runtime} minutes</h3>
		</div>
	{/if}
	<Genres />
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
	}
	.title-and-synopsis {
		text-align: left;
		margin-left: 1em;
		margin-bottom: 10px;
		margin-top: 0px;
		padding-top: 0px;
		vertical-align: top;
		height: 100%;
	}
	.title {
		margin-top: 0px;
		padding-top: 0px;
	}
	h4 {
		font-weight: 300;
	}
	.runtime {
		font-weight: 600;
	}
</style>
