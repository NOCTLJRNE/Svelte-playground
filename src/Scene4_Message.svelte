<script>
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene4Start = false;
</script>

<style>
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
</style>

<div id="flex-container">
  {#if scene4Start}
    <p>Scene 4</p>
  {/if}
</div>
