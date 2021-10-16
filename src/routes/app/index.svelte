<script lang="ts">
	import Prova from '$lib/components/Prova.svelte';
	import { user } from '$lib/stores/userStore';

	let ref: HTMLElement;
</script>

<div bind:this={ref}>{JSON.stringify($user)}</div>

<Prova ciao={'ciao sono io'} />

<slot />
