<script>
  import Scene1_IntroMessage from "./Scene1_IntroMessage.svelte";
  import Scene2_BdayCake from "./Scene2_BdayCake.svelte";
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";

  let visible1 = false;
  let scene2Visible = false;
  let scene2Start = false;
  let visible3 = false;
  let visible4 = false;
  let visible5 = false;
  let ending1 = true;
  let bgm1;
  onMount(() => {
    bgm1.volume = 0.7;
  });
  function startScene2() {
    scene2Visible = true;
    scene2Start = true;
  }
</script>

<style>
  #topContainer {
    height: 100%;
    background: rgb(41, 41, 41);
  }
  /* #message1 {
    margin-top: 20vh;
    font-family: "Sriracha", serif;
    font-size: 8vh;
    color: sandybrown;
  } */
</style>

<div id="topContainer">
  <h1>
    <a href="/" use:link>Back to 🏠🏠🏠</a>
  </h1>
  <audio
    bind:this={bgm1}
    autoplay
    src="./media/bgm/Happy_Birthday_Music_Box_Version_1.mp3" />
  <!-- <button on:click={() => (visible2 = false)}>visible2</button> -->
  {#if !scene2Visible}
    <Scene1_IntroMessage on:scene1Ended={startScene2} />
  {/if}
  {#if scene2Visible}
    <Scene2_BdayCake {scene2Start} />
  {/if}
</div>
