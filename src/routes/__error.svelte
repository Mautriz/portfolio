<script>
	import { base } from '$app/paths';
	import { absLink } from '$lib/utils';

	base;
</script>

<div>Are you lost ? There's no page with that url</div>
<p>
	Go back to the <a href={absLink('/app')}>Homepage</a>
</p>

<style>
</style>
