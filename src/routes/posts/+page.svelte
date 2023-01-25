<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown'
	import type { PageData } from './$types'

	export let data: PageData

</script>

<h1>README</h1>
<SvelteMarkdown source={data.contents} />


<style>
h1 {
	font-size: 2rem;
}
</style>
