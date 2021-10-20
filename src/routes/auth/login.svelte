<svelte:options immutable={false} />

<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import { user } from '$lib/stores/userStore';
	import { absLink } from '$lib/utils';

	let formValue = {
		username: ''
	};

	const login = (username: string) => {
		user.set({ username, id: username });
		goto(absLink('/app'));
	};
</script>

<div>
	<form on:submit|preventDefault={() => login(formValue.username)}>
		<input type="text" bind:value={formValue.username} />
		<Button on:click={() => login(formValue.username)}>Vai Forza</Button>
	</form>
</div>

<slot />
<div>Current username: {formValue.username}</div>
