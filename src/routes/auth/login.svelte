<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { getUserContext } from '$lib/userStore';

	let formValue = {
		username: ''
	};

	const { setNewUser } = getUserContext();

	const login = (username: string) => {
		setNewUser({ username, id: username });
		goto('/app');
	};
</script>

<div>
	<form>
		<input type="text" bind:value={formValue.username} />
		<button on:submit|preventDefault={() => login(formValue.username)} />
	</form>
</div>

<div>Current username: {formValue.username}</div>
