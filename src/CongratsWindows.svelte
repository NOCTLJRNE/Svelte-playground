<script>
  import Congrats from "./Congrats.svelte";
  import { push, pop, replace, link } from "svelte-spa-router";
  function getBack() {
    push("/");
  }
</script>

<style>
  :global(body) {
    overflow: hidden;
  }
</style>

<h1 id="h2-01">
  <a href="/" use:link>Ok, Stop 😕 ... 🌧️🌧️🌧️</a>
</h1>
<!-- <button on:click={getBack}>Ok I'm done !</button> -->
<br />
<Congrats />
