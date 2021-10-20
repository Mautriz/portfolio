<script lang="ts">
	export const text = 'Submit';

	let colorList = ['red', 'blue', 'black', 'yellow'];
	let currColor = colorList[0];

	$: currIdx = colorList.findIndex((e) => e === currColor);
	$: nextColor = colorList[currIdx + 1] ?? colorList[0];
</script>

<button on:click class="btn btn-{currColor}" on:click={() => (currColor = nextColor)}
	><slot />
</button>

<style lang="postcss">
	.btn {
		@apply rounded transition-all duration-500 relative hover:translate-y-1 hover:shadow px-3 py-2;
	}

	.btn-red {
		@apply text-red-600 bg-red-300 hover:bg-red-600 hover:text-gray-200;
	}

	.btn-blue {
		@apply text-blue-600 bg-blue-300 hover:bg-blue-600 hover:text-blue-200;
	}

	.btn-black {
		@apply text-gray-600 bg-gray-300 hover:bg-gray-600 hover:text-gray-200;
	}

	.btn-yellow {
		@apply text-yellow-600 bg-yellow-300 hover:bg-yellow-600 hover:text-yellow-200;
	}
</style>
