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
		console.log(data);
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
		right: 2px;
		top: 25px;
		/* transform: translate(-50%, -50%); */
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
	}

	.toggle-button {
		position: absolute;
		display: inline-block;
		top: 0.4rem;
		left: 0.5rem;
		width: 5.5rem;
		height: 5.5rem;
		border-radius: 50%;
		background: #faeaf1;
		overflow: hidden;
		box-shadow: 0 0 3rem 0.5rem rgba(255, 255, 255);
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
		width: 5.5rem;
		height: 5.5rem;
		left: 0rem;
		bottom: 0rem;
	}

	.crater-2 {
		width: 1em;
		height: 1em;
		top: -0.1rem;
		left: 3rem;
	}

	.crater-3 {
		width: 1em;
		height: 1em;
		top: 1.5rem;
		right: -0.2rem;
	}

	.crater-4 {
		width: 1em;
		height: 1em;
		top: 1.3rem;
		left: 2rem;
	}

	.crater-5 {
		width: 0.7em;
		height: 0.7em;
		top: 2.5rem;
		left: 3rem;
	}

	.crater-6 {
		width: 0.6em;
		height: 0.6em;
		top: 3.2rem;
		left: 1.3rem;
	}

	.crater-7 {
		width: 0.6em;
		height: 0.6em;
		bottom: -0.1rem;
		left: 2.4rem;
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
		right: 5rem;
		bottom: 3rem;
	}

	.star-2 {
		width: 0.5em;
		height: 0.5em;
		right: 4.1rem;
		top: 0.7rem;
	}

	.star-3 {
		width: 0.3em;
		height: 0.3em;
		right: 3.7rem;
		bottom: 1rem;
	}

	.star-4 {
		width: 0.2em;
		height: 0.2em;
		right: 2.5rem;
		bottom: 3.1rem;
	}

	.star-5 {
		width: 0.2em;
		height: 0.2em;
		right: 1rem;
		bottom: 2rem;
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
		right: 3.2rem;
		bottom: 4rem;
	}

	.star-8 {
		right: 5rem;
		top: 1rem;
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
		width: 40px;
		height: 10px;
		border-radius: 10px;
		background: #fff;
		left: 20px;
		top: 25px;
		box-shadow: none;
	}

	#hide-checkbox:checked + .toggle .star-2 {
		width: 12px;
		height: 12px;
		background: #fff;
		left: 26px;
		top: 23px;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-3 {
		width: 16px;
		height: 16px;
		background: #fff;
		left: 35px;
		top: 19px;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-4 {
		width: 14px;
		height: 14px;
		background: #fff;
		left: 46px;
		top: 21px;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-5 {
		width: 60px;
		height: 15px;
		border-radius: 15px;
		background: #fff;
		left: 30px;
		bottom: 20px;
		box-shadow: none;
	}

	#hide-checkbox:checked + .toggle .star-6 {
		width: 18px;
		height: 18px;
		background: #fff;
		border-radius: 50%;
		left: 38px;
		bottom: 20px;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-7 {
		width: 24px;
		height: 24px;
		background: #fff;
		border-radius: 50%;
		left: 52px;
		bottom: 20px;
		box-shadow: -1px 0 2px 0 rgba(0, 0, 0, 0.1);
	}

	#hide-checkbox:checked + .toggle .star-8 {
		width: 21px;
		height: 21px;
		background: #fff;
		border-radius: 50%;
		left: 70px;
		top: 59px;
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

	/* p {
		text-align: center;
		letter-spacing: 15px;
		background: #34495e;
		color: #fff;
	}

	p.morning {
		background: #e67e22;
	} */
</style>
