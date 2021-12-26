<script lang="ts">
	import { onMount } from 'svelte';
	let canvas: HTMLCanvasElement;
	let game: Phaser.Game;

	onMount(async () => {
		const Phaser = await import('phaser');
		const { height, width } = canvas.parentElement.getBoundingClientRect();

		var game = new Phaser.Game({
			type: Phaser.WEBGL,
			canvas,
			width,
			height,
			scene: {
				preload: preload,
				create: create,
				update: update
			}
		});

		function preload() {}

		function create() {}

		function update() {}
	});
</script>

<canvas bind:this={canvas} />

<svelte:window on:resize={() => null} />
