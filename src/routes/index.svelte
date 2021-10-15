<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { getUserContext } from '$lib/userStore';

	const { user } = getUserContext();

	if (!$user && browser) goto('/app');
</script>
