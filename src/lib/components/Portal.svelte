<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let ref: HTMLElement;

	onMount(() => {
		document.body.appendChild(ref);
	});

	onDestroy(() => {
		document.body.removeChild(ref);
	});
</script>

<div bind:this={ref}>
	<slot />
</div>
