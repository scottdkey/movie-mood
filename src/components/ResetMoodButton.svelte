<script lang="ts">
	import { CurrentMood } from '../lib/stores/currentMood.store';
	import { DesiredMood } from '../lib/stores/desiredMood.store';
	import { movieInfo, providerInfo } from '../lib/stores/selectedMovie.store';
</script>

<button
	class={`reset-mood ${$DesiredMood === '' || $CurrentMood === '' ? 'hidden' : ''}`}
	disabled={$DesiredMood === '' || $CurrentMood === ''}
	on:click={() => {
		DesiredMood.set('');
		CurrentMood.set('');
		movieInfo.set(null);
		providerInfo.set(null);
	}}
>
	reset
</button>

<style>
	.reset-mood {
		width: 7rem;
		height: 3rem;
		margin: 0px;
		padding: 0px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 20px;
		display: block;
		margin-top: 50px;
		border: none;
		font-size: 1.2em;
		background: var(--secondary);
	}
	.reset-mood:hover {
		background: var(--secondary-hover);
	}
	.reset-mood:disabled {
		background: var(--secondary-disabled);
		display: none;
	}
</style>
