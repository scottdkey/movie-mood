<script lang="ts">
	import { theme } from '$lib/stores/theme';

	const updateThemePost = async () => {
		theme.set($theme === 'light' ? 'dark' : 'light');
		const response = await fetch('/api/theme', {
			method: 'POST',
			body: JSON.stringify({ theme: $theme }),
			headers: {
				'content-type': 'application/json'
			}
		});
		const data = response.json();
	};
</script>

<div class="wrapper">
	<input
		type="checkbox"
		id="hide-checkbox"
		name="theme"
		checked={$theme === 'light'}
		value={'light'}
		on:click={updateThemePost}
	/>
	<label for="hide-checkbox" class="toggle">
		<span class="toggle-button">
			<span class="crater crater-1"></span>
			<span class="crater crater-2"></span>
			<span class="crater crater-3"></span>
			<span class="crater crater-4"></span>
			<span class="crater crater-5"></span>
			<span class="crater crater-6"></span>
			<span class="crater crater-7"></span>
		</span>
		<span class="star star-1"></span>
		<span class="star star-2"></span>
		<span class="star star-3"></span>
		<span class="star star-4"></span>
		<span class="star star-5"></span>
		<span class="star star-6"></span>
		<span class="star star-7"></span>
		<span class="star star-8"></span>
	</label>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Nunito:800i&display=swap');

	.wrapper {
		position: absolute;
		right: -50px;
		bottom: -30px;
	}

	#hide-checkbox {
		opacity: 0;
		height: 0;
		width: 0;
	}

	.toggle {
		position: relative;
		cursor: pointer;
		display: inline-block;
		width: 200px;
		height: 100px;
		background: #211042;
		border-radius: 50px;
		transition: 500ms;
		overflow: hidden;
		scale: 0.3;
	}

	.toggle-button {
		position: absolute;
		display: inline-block;
		top: 0.4em;
		left: 0.5em;
		width: 5.5em;
		height: 5.5em;
		border-radius: 50%;
		background: #faeaf1;
		overflow: hidden;
		box-shadow: 0 0 3em 0.5em rgba(255, 255, 255);
		transition: all 500ms ease-out;
	}

	.crater {
		position: absolute;
		display: inline-block;
		background: #faeaf1;
		border-radius: 50%;
		transition: 500ms;
	}

	.crater-1 {
		background: #fffff9;
		width: 5.5em;
		height: 5.5em;
		left: 0em;
		bottom: 0em;
	}

	.crater-2 {
		width: 1em;
		height: 1em;
		top: -0.1em;
		left: 3em;
	}

	.crater-3 {
		width: 1em;
		height: 1em;
		top: 1.5em;
		right: -0.2em;
	}

	.crater-4 {
		width: 1em;
		height: 1em;
		top: 1.3em;
		left: 2em;
	}

	.crater-5 {
		width: 0.7em;
		height: 0.7em;
		top: 2.5em;
		left: 3em;
	}

	.crater-6 {
		width: 0.6em;
		height: 0.6em;
		top: 3.2em;
		left: 1.3em;
	}

	.crater-7 {
		width: 0.6em;
		height: 0.6em;
		bottom: -0.1em;
		left: 2.4em;
	}

	.star {
		position: absolute;
		display: inline-block;
		border-radius: 50%;
		background: #fff;
		box-shadow: 1px 0 2px 2px rgba(255, 255, 255);
	}

	.star-1 {
		width: 0.5em;
		height: 0.5em;
		right: 5em;
		bottom: 3em;
	}

	.star-2 {
		width: 0.5em;
		height: 0.5em;
		right: 4.1em;
		top: 0.7em;
	}

	.star-3 {
		width: 0.3em;
		height: 0.3em;
		right: 3.7em;
		bottom: 1em;
	}

	.star-4 {
		width: 0.2em;
		height: 0.2em;
		right: 2.5em;
		bottom: 3.1em;
	}

	.star-5 {
		width: 0.2em;
		height: 0.2em;
		right: 1em;
		bottom: 2em;
	}

	.star-6,
	.star-7,
	.star-8 {
		width: 0.5em;
		height: 0.2em;
		border-radius: 1em;
		transform: rotate(-45deg);
		box-shadow: 5px 0px 4px 1px #fff;
		animation-name: travel;
		animation-duration: 1.5s;
		animation-timing-function: ease-out;
		animation-iteration-count: infinite;
	}

	.star-6 {
		right: 2em;
		bottom: 2em;
		animation-delay: -2s;
	}

	.star-7 {
		right: 3.2em;
		bottom: 4em;
	}

	.star-8 {
		right: 5em;
		top: 1em;
		animation-delay: -4s;
	}

	@keyframes travel {
		0% {
			transform: rotate(-45deg) translateX(70px);
		}

		50% {
			transform: rotate(-45deg) translateX(-20px);
			box-shadow: 5px 0px 6px 1px #fff;
		}

		100% {
			transform: rotate(-45deg) translateX(-30px);
			width: 0.1em;
			height: 0.1em;
			opacity: 0;
			box-shadow: none;
		}
	}

	#hide-checkbox:checked + .toggle {
		background: #24d7f7;
	}

	#hide-checkbox:checked + .toggle .toggle-button {
		background: #f7ffff;
		transform: translateX(6.09em);
		box-shadow: 0 0 35px 5px rgba(255, 255, 255);
	}

	#hide-checkbox:checked + .toggle .toggle-button .crater {
		transform: rotate(-45deg) translateX(70px);
	}

	#hide-checkbox:checked + .toggle .star {
		animation: move 20s infinite;
		transform: none;
		box-shadow: none;
	}

	#hide-checkbox:checked + .toggle .star-1 {
		width: 2.4em;
		height: 0.62em;
		border-radius: 10px;
		background: #fff;
		left: 1.25em;
		top: 1.6em;
		box-shadow: none;
	}

	#hide-checkbox:checked + .toggle .star-2 {
		width: 0.9em;
		height: 0.8em;
		background: #fff;
		left: 1.62em;
		top: 1.42em;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-3 {
		width: 1em;
		height: 1em;
		background: #fff;
		left: 2.2em;
		top: 1.2em;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-4 {
		width: 0.92em;
		height: 0.92em;
		background: #fff;
		left: 2.8em;
		top: 1.3em;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-5 {
		width: 3.8em;
		height: 0.9em;
		border-radius: 1em;
		background: #fff;
		left: 1.8em;
		bottom: 1.25em;
		box-shadow: none;
	}

	#hide-checkbox:checked + .toggle .star-6 {
		width: 1.2em;
		height: 1.2em;
		background: #fff;
		border-radius: 50%;
		left: 2.4em;
		bottom: 1.3em;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-7 {
		width: 1.5em;
		height: 1.5em;
		background: #fff;
		border-radius: 50%;
		left: 3.3em;
		bottom: 1.25em;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-8 {
		width: 1.3em;
		height: 1.3em;
		background: #fff;
		border-radius: 50%;
		left: 4.4em;
		top: 3.7em;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	@keyframes move {
		0% {
			transform: translateX(-6em);
			opacity: 0%;
		}
		25% {
			opacity: 100%;
			visibility: visible;
		}
		95% {
			transform: translateX(6em);
			opacity: 0%;
		}
		100% {
			opacity: 0%;
		}
	}
</style>
