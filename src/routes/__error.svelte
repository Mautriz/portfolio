<script lang="ts">
	import Link from '$lib/components/Link.svelte';

	import { absLink } from '$lib/utils';
</script>

<div>Are you lost ? There's no page with that url</div>
<p class="text-gray-700">
	Go back to the <Link href={absLink('/app')}>Homepage</Link>
</p>

<style>
</style>
