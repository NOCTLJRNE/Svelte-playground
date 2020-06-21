<script>
  import CongratsWindows from "./CongratsWindows.svelte";
  import Index from "./Index.svelte";
  import Fonts from "./Fonts.svelte";
  import Glowing from "./Glowing.svelte";
  import Gradient from "./Gradient.svelte";
  import AirDrop from "./AirDrop.svelte";
  import Dance from "./Dance.svelte";
  import BirthDay from "./BirthDay.svelte";
  import Scene2_BdayCake from "./Scene2_BdayCake.svelte";
  import Scene3_GiftBox from "./Scene3_GiftBox.svelte";
  import Scene4_Message from "./Scene4_Message.svelte";
  import Scene5_TheEnd from "./Scene5_TheEnd.svelte";
  // import Congrats from "./Congrats.svelte";
  import Router from "svelte-spa-router";
  import { onDestroy, onMount } from "svelte";
  import { link } from "svelte-spa-router";

  const routes = {
    "/": Index,
    "/congrats": CongratsWindows,
    "/fonts": Fonts,
    "/glowing": Glowing,
    "/gradient": Gradient,
    "/airdrop": AirDrop,
    "/dance": Dance,
    "/birthday": BirthDay,
    "/scene2": Scene2_BdayCake,
    "/scene3": Scene3_GiftBox,
    "/scene4": Scene4_Message,
    "/scene5": Scene5_TheEnd
  };
  onMount(() => {
    console.log("screen width:", screen.width);
    console.log("screen height:", screen.height);
    console.log("viewport width:", window.innerWidth);
    console.log("viewport height:", window.innerHeight);
  });
  //Keypad
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    padding: 0;
    height: 100%;
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
