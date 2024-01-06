<script>
	import { CurrentMood } from '../lib/stores/currentMood.store';
	import { DesiredMood } from '../lib/stores/desiredMood.store';
</script>

{#if $DesiredMood !== '' && $CurrentMood !== ''}
	<div class="movie-selection">
		you're {$CurrentMood} and want a movie to make you {$DesiredMood}
	</div>
{/if}

<style>
	.movie-selection {
		margin-top: 40px;
		text-align: center;
		vertical-align: center;
		color: #c235af;
		font-size: 20px;
	}
</style>
