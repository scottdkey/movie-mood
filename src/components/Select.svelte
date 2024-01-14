<script lang="ts">
	export let value = '';
	export let selections: string[];
	export let placeholder: string;
	export let checkAgainstValue: string;
	export let name: string;
</script>

<select {name} class="custom-select" bind:value disabled={value !== ''}>
	<option value="" selected disabled hidden>{placeholder}</option>
	{#each selections as s}
		{#if s !== checkAgainstValue}
			<option value={s}>{s}</option>
		{/if}
	{/each}
</select>

<style>
	select {
		appearance: none;
		/*  safari  */
		-webkit-appearance: none;
		/*  other styles for aesthetics */
		width: 100%;
		font-size: 1.15rem;
		background-color: var(--primary);
		border: 1px solid var(--primary-border);
		border-radius: 0.25rem;
		color: (--font-color);
		cursor: pointer;
		font-size: 1.5em;
	}

	.custom-select {
		min-width: 350px;
		max-width: fit-content;
		max-height: 60px;
		min-height: 40px;
		margin: 0px;
		text-align: center;
		color: var(--font-color);
		margin-right: 20px;
		margin-left: 20px;
		border-radius: 20px;
		margin-top: 20px;
	}
	.custom-select:disabled {
		background-color: var(--light);
	}

	.custom-select:hover :active {
		background-color: var(--primary-hover);
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
		border-bottom: var(--size) solid var(--darkest);
		top: 40%;
	}

	.custom-select::after {
		border-left: var(--size) solid transparent;
		border-right: var(--size) solid transparent;
		border-top: var(--size) solid var(--darkest);
		top: 55%;
	}
</style>
