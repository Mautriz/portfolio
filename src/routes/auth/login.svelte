<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/userStore';

	let formValue = {
		username: ''
	};

	const login = (username: string) => {
		user.set({ username, id: username });
		goto('/app');
	};
</script>

<div>
	<form on:submit|preventDefault={() => login(formValue.username)}>
		<input type="text" bind:value={formValue.username} />
		<button class="btn btn-primary">Submit</button>
	</form>
</div>

<slot />
<div>Current username: {formValue.username}</div>
