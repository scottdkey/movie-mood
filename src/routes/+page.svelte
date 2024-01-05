<script lang="ts">
	import Acknowledgements from '../components/Acknowledgements.svelte';
	import Drawer from '../components/Drawer.svelte';
	import MovieSelection from '../components/MovieSelection.svelte';
	import ResetMoodButton from '../components/ResetMoodButton.svelte';
	import Select from '../components/Select.svelte';
	import { moods } from '../staticData/selections';
	import { CurrentMood } from '../stores/currentMood.store';
	import { DesiredMood } from '../stores/desiredMood.store';
</script>

<body class="primary">
	<Drawer>
		<Acknowledgements />
	</Drawer>
	<h1>Movie Mood</h1>
	<div class="selectors">
		<Select
			name="current-mood"
			selections={moods}
			placeholder="Current Mood"
			checkAgainstValue={$DesiredMood}
			bind:value={$CurrentMood}
		/>
		<Select
			name="desired-mood"
			selections={moods}
			placeholder="Desired Mood"
			bind:value={$DesiredMood}
			bind:checkAgainstValue={$CurrentMood}
		/>
	</div>

	<ResetMoodButton />
	<MovieSelection />
</body>

<style>
	.primary {
		font-family: 'system-ui, sans-serif';
		line-height: '1.8';
	}
	h1 {
		background-color: #612a5a;
		color: #cf328b;
		border-radius: 0px 0px 20px 20px;
		margin: 0px;
		text-align: center;
		vertical-align: middle;
		padding-top: 20px;
		max-height: 100px;
		padding-bottom: 40px;
	}
	.selectors {
		display: flex;
		width: 100%;
		max-height: 40px;
		margin-top: 0px;
		margin-bottom: 0px;
		justify-content: center;
		vertical-align: center;
		margin-top: 40px;
		align-items: center;
		margin-bottom: 20px;
	}
	@media (max-width: 750px) {
		.selectors {
			flex-direction: column;
		}
	}

	/*=============
Aesthetics 
=========================*/

	* {
		box-sizing: border-box;
		margin: 0px;
	}
	body {
		background-color: #18041a;
	}
</style>
