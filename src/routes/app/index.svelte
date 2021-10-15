<script lang="ts">
	import Prova from '$lib/components/Prova.svelte';

	import { getUserContext } from '$lib/userStore';
	import { onMount } from 'svelte';

	let ref: HTMLElement;

	const { user, setNewUser } = getUserContext();

	onMount(() => {});
</script>

<div bind:this={ref}>{JSON.stringify($user)}</div>

<Prova ciao={'ciao sono io'} />
