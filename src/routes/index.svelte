<script lang="ts">
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import { user } from '$lib/stores/userStore';

	if (!$user && browser) goto('/app');
</script>

<slot />
