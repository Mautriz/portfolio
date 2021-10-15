<script lang="ts">
	import { ao } from '$lib/services/ao';

	export let ciao = 'prova';
</script>

<input type="text" name="name-input" value={ciao} />
<div>{ciao}</div>

<div>{ao.frate}</div>
