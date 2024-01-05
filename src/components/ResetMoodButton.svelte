<script lang="ts">
	import { CurrentMood } from '../stores/currentMood.store';
	import { DesiredMood } from '../stores/desiredMood.store';
</script>

<button
	class="reset-mood"
	disabled={$DesiredMood === '' || $CurrentMood === ''}
	on:click={() => {
		DesiredMood.set('');
		CurrentMood.set('');
	}}
>
	reset
</button>

<style>
	.reset-mood {
		background-color: #612a5a8b;
		color: #cf328b;
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
	}
	.reset-mood:hover {
		background-color: #71178388;
	}
	.reset-mood:disabled {
		background-color: #84848447;
		color: #494949;
	}
</style>
