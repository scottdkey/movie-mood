<script lang="ts">
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'left';
	export let open = false;

	const toggleOpen = () => {
		open = !open;
	};
</script>


<div class="{position} drawer {open ? 'open' : 'closed'} ">
	<div class="drawer-body">
		<button class="close-button" on:click={toggleOpen}>X</button>
		<slot />
	</div>
</div>

<style>
	@media (max-width: 500px) {
		/* button {
			width: 65vw;
		} */
	}
	.drawer {
		position: absolute;
		transition: ease-in-out 0.5s;
		z-index: 10;
		overflow: hidden;
		padding: 0px;
		margin: 0px;
		height: fit-content;
		width: fit-content;
		background-color: black;
	}

	.closed {
		width: 0em;
		height: 0em;
	}

	.bottom {
		bottom: 0px;
	}
	.drawer-body {
		height: fit-content;
		width: fit-content;
		overflow: hidden;
	}
</style>
