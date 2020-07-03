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

<svelte:head>
  <meta property="og:image" content="/media/snowy.jpg" />
</svelte:head>
<h2>Congratulations</h2>
<button on:click={getBack}>Ok I'm done !</button>
<br />
<Congrats />
