<script context="module" lang="ts">
	import '@interactjs/interact';
	import '@interactjs/actions';
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/userStore';
</script>

<div class="app-grid">
	<header class="container">
		<nav>
			<button class="btn btn-primary" on:click={() => goto('/auth/login')}>Login</button>
			<button class="btn btn-primary" on:click={() => goto('/app')}>Home</button>
		</nav>
		<div>
			{#if $user}
				Sei loggato come: {$user.username}
			{:else}
				Non sei loggato, vai alla pagina di login per favore
			{/if}
		</div>
	</header>
	<main class="container">
		<slot />
	</main>
	<footer>
		<div>Questo è il footer</div>
	</footer>
</div>

<style lang="scss">
	.app-grid {
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 60px auto 80px;
	}

	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
	}
</style>
