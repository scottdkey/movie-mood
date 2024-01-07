<script lang="ts">
	import SunMoonToggle from './ThemeToggle.svelte';
</script>

<form method="POST" action="?/setTheme">
	<SunMoonToggle />
	<button name="theme" type="submit" value="light">light</button>
	<button name="theme" type="submit" value="dark">dark</button>
</form>
