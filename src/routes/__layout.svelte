<script lang="ts">
	import { setUserContext } from '$lib/userStore';
	setUserContext();
</script>

<slot />

<style global lang="scss">
	@import '../app.scss';
</style>
