<script>
  import Scene1_IntroMessage from "./Scene1_IntroMessage.svelte";
  import Scene2_BdayCake from "./Scene2_BdayCake.svelte";
  import Scene3_GiftBox from "./Scene3_GiftBox.svelte";
  import Scene4_Message from "./Scene4_Message.svelte";
  import Scene5_TheEnd from "./Scene5_TheEnd.svelte";
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";

  let visible1 = false;
  let scene1Visible = false;
  let scene2Visible = false;
  let scene2Start = false;
  let scene3Visible = false;
  let scene4Visible = false;
  let scene5Visible = false;
  let scene3Start = false;
  let scene4Start = false;
  let scene3Ended = false;
  let visible3 = false;
  let visible4 = false;
  let visible5 = false;
  let ending1 = true;
  let bgm2Ended = false;
  let bgm1;
  let bgm2;
  const bgm2Delay = 3000;
  onMount(() => {
    // bgm1.volume = 0.7;
    scene1Visible = true;
    bgm1.volume = 0.2;
    bgm2.volume = 0.2;
  });
  function bgm1Ended() {
    // console.log("Song ended !");
    // scene3Start = false;
    setTimeout(() => {
      scene3Ended = true;
    }, 3000);
  }
  // function bgm2Ended() {}
  function startScene2() {
    scene1Visible = false;
    scene2Visible = true;
    scene2Start = true;
  }
  function startScene3() {
    scene3Visible = true;
    scene3Start = true;
    scene2Visible = false;
  }
  function startScene4() {
    scene4Visible = true;
    scene4Start = true;
    scene3Visible = false;
    setTimeout(() => {
      bgm2.play();
    }, bgm2Delay);
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
  <!-- <h1>
    <a href="/" use:link>Back to 🏠🏠🏠</a>
  </h1> -->
  <audio
    bind:this={bgm1}
    autoplay
    on:ended={bgm1Ended}
    src="./media/bgm/Happy_Birthday_Music_Box_Version_1_cut.mp3" />
  <audio
    bind:this={bgm2}
    on:ended={() => {
      bgm2Ended = true;
      setTimeout(() => {
        scene4Visible = false;
        scene5Visible = true;
      }, 5000);
    }}
    src="./media/bgm/Drop That Booty Down Low drop.mp3" />
  <!-- <button on:click={() => (visible2 = false)}>visible2</button> -->
  {#if scene1Visible}
    <Scene1_IntroMessage on:scene1Ended={startScene2} />
  {/if}
  {#if scene2Visible}
    <Scene2_BdayCake on:scene2Ended={startScene3} {scene2Start} />
  {/if}
  {#if scene3Visible}
    <Scene3_GiftBox
      on:scene3EndedEvent={startScene4}
      {scene3Start}
      {scene3Ended} />
    <!-- <Scene3_GiftBox {scene3Ended} /> -->
  {/if}
  {#if scene4Visible}
    <Scene4_Message {scene4Start} {bgm2Delay} {bgm2Ended} />
    <!-- <Scene3_GiftBox {scene3Ended} /> -->
  {/if}
  {#if scene5Visible}
    <Scene5_TheEnd />
  {/if}

</div>
