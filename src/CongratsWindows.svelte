<script>
  import Congrats from "./Congrats.svelte";
  import { push, pop, replace } from "svelte-spa-router";
  function getBack() {
    push("/");
  }
</script>

<style>
  body {
    overflow: hidden;
  }
</style>

<button on:click={getBack}>Ok I'm done !</button>
<br />
<Congrats />
