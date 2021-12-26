<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import { user } from '$lib/stores/userStore';
	import { absLink } from '$lib/utils';
</script>

<div class="app-grid">
	<header>
		<nav>
			<Button on:click={() => goto(absLink('/auth/login'))}>Login</Button>
			<Button on:click={() => goto(absLink('/app'))}>Home</Button>
		</nav>
		<div>
			{#if $user}
				Sei loggato come: {$user.username}
			{:else}
				Non sei loggato, vai alla pagina di login per favore
			{/if}
		</div>
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<div>Questo è il footer</div>
	</footer>
</div>

<style>
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
