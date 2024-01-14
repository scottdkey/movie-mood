<script lang="ts">
	export let logoPath: string;
	export let name: string;
</script>

<img class="production-company" alt={`${name} logo`} src={logoPath} />

<style>
	.production-company {
		max-height: 200px;
		max-width: 200px;
		object-fit: scale-down;
		margin: 5px;
		vertical-align: center;
		background-color: rgba(255, 255, 255, 0.614);
		padding: 5px;
		border-radius: 10px;
	}
</style>
