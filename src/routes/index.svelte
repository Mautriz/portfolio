<script context="module">
	import Link from '$lib/components/Link.svelte';

	export const prerender = true;
</script>

<nav class="flex content-between">
	<Link href="./auth/login">Login</Link>
	<Link href="./app/phaser">Phaser</Link>
</nav>
