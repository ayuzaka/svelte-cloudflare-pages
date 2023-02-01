<script lang="ts">
	import Portal from '../../lib/components/Portal.svelte';

	let displayPortal = false;

	function togglePortal() {
		displayPortal = !displayPortal;
	}
</script>

<div>
	<p>foo bar</p>
	{#if displayPortal}
		<Portal>Portal contents</Portal>
	{/if}
</div>

<button type="button" on:click={togglePortal}> Toggle Portal </button>
