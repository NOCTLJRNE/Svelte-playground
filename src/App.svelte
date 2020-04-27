<script>
  import CongratsWindows from "./CongratsWindows.svelte";
  import Index from "./Index.svelte";
  import Fonts from "./Fonts.svelte";
  import Glowing from "./Glowing.svelte";
  // import Congrats from "./Congrats.svelte";
  import Router from "svelte-spa-router";
  import { onDestroy } from "svelte";
  import { link } from "svelte-spa-router";

  const routes = {
    "/": Index,
    "/congrats": CongratsWindows,
    "/fonts": Fonts,
    "/glowing": Glowing
  };

  //Keypad
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    padding: 0;
    /* max-width: 240px; */
    margin: 0 auto;
    margin: 0 0 0 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <Router {routes} />
  <!-- Transitons -->

</main>
