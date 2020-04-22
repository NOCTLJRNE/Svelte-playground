<script>
  import CongratsWindows from "./CongratsWindows.svelte";
  // import Congrats from "./Congrats.svelte";
  import Router from "svelte-spa-router";
  import { onDestroy } from "svelte";
  import { link } from "svelte-spa-router";

  const routes = {
    "/congrats": CongratsWindows
  };

  //Keypad
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  #h2-01 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <h2 id="h2-01">
    <a href="/congrats" use:link>Let the party begin !</a>
  </h2>

  <Router {routes} />
  <!-- Transitons -->

</main>
