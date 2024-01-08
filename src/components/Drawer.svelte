<script lang="ts">
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'left';
	export let open = false;

	export const toggleOpen = () => {
		open = !open;
	};
</script>

<div class="front drawer {position}-{open ? 'open' : 'closed'}">
	<input type="checkbox" class="controller" checked={open} />
	<div class="drawer-body">
		<button class="close-button" on:click={toggleOpen}>X</button>
		<slot />
	</div>
</div>

<style>
	.drawer {
		position: absolute;
		background-color: var(--drawer-background);
		display: flex;
		flex-direction: column;
		padding: 0px;
		margin: 0px;
		height: fit-content;
		width: fit-content;
		-webkit-box-shadow: -1px -10px 13px -5px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: -1px -10px 13px -5px rgba(0, 0, 0, 0.75);
		box-shadow: -1px -10px 13px -5px rgba(0, 0, 0, 0.75);
	}
	.controller {
		visibility: hidden;
		background-color: none;
	}

	.bottom-open {
		bottom: 0px;
		transition: ease-in-out 0.5s;
		height: 60vh;
		width: 100%;
		height: fit-content;
		transform: translateY(50%);
	}

	.bottom-closed {
		transform: translateY(230%);
	}

	.drawer-body {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.close-button {
		width: 2em;
		height: 2em;
		align-self: flex-end;
		margin-right: 10px;
		margin-top: 10px;
	}
</style>
