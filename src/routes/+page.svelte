<script lang="ts">
	import { tick,  } from "svelte";

  let count = 0;
  let double = 0;
  $: double = count * 2;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={async () => { count++; await tick(); console.log(double); }}>Cliecked {count} times!</button>
Clicks double is {double}