<script lang="ts">
	let currentMood = '';
	let desiredMood = '';

	const moods = ['angry', 'sad', 'happy', 'bemused', 'in love'];
</script>

<body class="primary">
	<h1>Movie Mood</h1>
	<div class="selectors">
		<select name="currentMood" class="custom-select" bind:value={currentMood}>
			<option value="" selected disabled hidden>current mood</option>
			{#each moods as mood}
				{#if mood !== desiredMood}
					<option value={mood}>{mood}</option>
				{/if}
			{/each}
		</select>
		<select name="desiredMood" class="custom-select" bind:value={desiredMood}>
			<option value="" selected disabled hidden>desired mood</option>
			{#each moods as mood}
				{#if mood !== currentMood}
					<option value={mood}>{mood}</option>
				{/if}
			{/each}
		</select>
	</div>
	<button
		class="reset-mood"
		disabled={desiredMood === '' || currentMood === ''}
		on:click={() => {
			desiredMood = '';
			currentMood = '';
		}}
	>
		reset
	</button>
	{#if desiredMood !== '' && currentMood !== ''}
		<div class="movie-selection">
			you're {currentMood} and want a movie to make you {desiredMood}
		</div>
	{/if}
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
		max-height: 80px;
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

	.custom-select {
		min-width: 350px;
		max-width: fit-content;
		max-height: 60px;
		min-height: 40px;
		margin: 0px;
		text-align: center;
		color: #c235af;
		margin-right: 20px;
		margin-left: 20px;
		border-radius: 20px;
		margin-top: 20px;
	}

	.custom-select:hover :active {
		background-color: #612a5a;
	}

	select {
		appearance: none;
		/*  safari  */
		-webkit-appearance: none;
		/*  other styles for aesthetics */
		width: 100%;
		font-size: 1.15rem;
		background-color: #470f0f;
		border: 1px solid #000000;
		border-radius: 0.25rem;
		color: #cf328b;
		cursor: pointer;
		font-size: 1.5em;
	}

	.custom-select::before,
	.custom-select::after {
		--size: 0.3rem;
		content: '';
		position: absolute;
		right: 1rem;
		pointer-events: none;
	}

	.custom-select::before {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-bottom: var(--size) solid black;
		top: 40%;
	}

	.custom-select::after {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-top: var(--size) solid black;
		top: 55%;
	}

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

	.movie-selection {
		margin-top: 40px;
		text-align: center;
		vertical-align: center;
		color: #c235af;
		font-size: 20px;
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
