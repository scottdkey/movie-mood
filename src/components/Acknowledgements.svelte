<script lang="ts">
	import Drawer from './Drawer.svelte';

	let toggleOpen: () => void;
</script>

<button class="ack-button" on:click={toggleOpen}>Acknowledgements</button>
<Drawer position="bottom" bind:toggleOpen>
	<div class="ack-body">
		<!-- <p>
			Core design of the site by Sazi Bachti, and built by Scott Key. We do not own the movie
			content nor can sanction of its further downstream use.
		</p> -->

		<p>
			We'd like to thank the <a target="_blank" href="https://www.themoviedb.org/">themoviedb.org</a
			>
			for their movieApi as well as
			<a target="_blank" href="https://www.justwatch.com/"> JestWatch </a>
			for up to date streaming information.
		</p>

		<!-- <p>
			The theme switch animation was created by <a
				href="https://codepen.io/alvarotrigo"
				target="_blank">Álvaro</a
			> and modified for use on this site.
		</p> -->

		<p>this site is currently a work in progress.</p>
	</div>
</Drawer>

<style>
	.ack-button {
		z-index: 2;
		padding: 10px;
		position: absolute;
		right: 80px;
		bottom: 13px;
	}
	.ack-body {
		height: 20em;
		padding: 10px;
		width: 100%;
	}
</style>
