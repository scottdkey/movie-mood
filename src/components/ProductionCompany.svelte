<script lang="ts">
	import { movieInfo } from '../lib/stores/selectedMovie.store';
</script>

{#if $movieInfo !== null}
	<div class="production-company-wrapper">
		{#each $movieInfo.production_companies as company}
			<img class="production-company" alt={`${company.name} logo`} src={company.logo_path} />
		{/each}
	</div>
{/if}

<style>
	.production-company-wrapper {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}
	.production-company {
		max-height: 200px;
		max-width: 200px;
		object-fit: scale-down;
		margin: 5px;
		vertical-align: center;
		background-color: rgba(255, 255, 255, 0.614);
		padding: 5px;
		border-radius: 10px;
	}
</style>
