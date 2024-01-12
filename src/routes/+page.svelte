<script lang="ts">
	import MovieInfo from '../components/MovieInfo.svelte';
	import ProviderInfo from '../components/ProviderInfo.svelte';
	import ResetMoodButton from '../components/ResetMoodButton.svelte';
	import Select from '../components/Select.svelte';
	import { CurrentMood } from '../lib/stores/currentMood.store';
	import { DesiredMood } from '../lib/stores/desiredMood.store';
	import { moods } from '../staticData/selections';
</script>

<body class="primary">
	<div class="selectors">
		<Select
			name="current-mood"
			selections={moods}
			placeholder="Current Mood"
			bind:checkAgainstValue={$DesiredMood}
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
	<MovieInfo />
	<ProviderInfo />
</body>

<style>
	.primary {
		font-family: 'system-ui, sans-serif';
		line-height: '1.8';
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
</style>
