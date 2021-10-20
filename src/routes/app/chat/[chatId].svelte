<script lang="ts">
	import { page } from '$app/stores';

	import DrawerItem from '$lib/components/DrawerItem.svelte';
	type ciao = $$Generic<string>;
	let items: ciao[] = [];
</script>

<div class="h-full grid grid-cols-6">
	<div class="flex flex-col">
		{#each items as item}
			<DrawerItem />
		{/each}
	</div>

	<main class="col-span-5">
		<div>{$page.params.chatId}</div>
	</main>
</div>

<style>
</style>
