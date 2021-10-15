<script context="module" lang="ts">
	import '@interactjs/interact';
	import '@interactjs/actions';
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { getUserContext, setUserContext } from '$lib/userStore';

	const { user } = getUserContext();
</script>

<div class="app-grid">
	<header>
		<nav>
			<button on:click={() => goto('/auth/login')}>Login</button>
			<button on:click={() => goto('/app')}>Home</button>
		</nav>
		<div>
			{#if $user}
				Sei loggato come: {$user.username}
			{:else}
				Non sei loggato, vai alla pagina di login per favore
			{/if}
		</div>
	</header>
	<slot />
	<footer />
</div>

<style lang="scss">
	.app-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto 1fr;
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
	}
</style>
