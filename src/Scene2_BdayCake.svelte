<script>
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut } from "svelte/easing";
  import { onMount, createEventDispatcher } from "svelte";
  // export let scene2Start = false;
  const hummingWidth = 291;
  const hummingHeight = 285;
  const hummingRatioToScreenHeight = 0.35;
  const refHeight = window.innerHeight;
  const refWidth = window.innerWidth;
  // const refHeight = screen.height;
  // const refWidth = screen.width;
  const hummingTargetHeight = hummingRatioToScreenHeight * refHeight;
  const hummingResizeRatio =
    Math.round((hummingTargetHeight * 100) / hummingHeight) / 100;
  const hummingResizeWidth = hummingWidth * hummingResizeRatio;
  const hummingResizeHeight = hummingHeight * hummingResizeRatio;
  const blinkingGlowBlurRadius = 0.09 * refWidth;
  let scene2Start = false;
  onMount(() => {
    scene2Start = true;
    // console.log("screen width:", screen.width);
    // console.log("screen height:", screen.height);
    // console.log("viewport width:", window.innerWidth);
    // console.log("viewport height:", window.innerHeight);
    // console.log("humming resize ratio: ", hummingResizeRatio);
  });
  const dispatch = createEventDispatcher();
  function scene2Ended() {
    dispatch("scene2Ended", { message: "scene2 has ended !" });
  }
  function startCountDown(delay) {
    setTimeout(() => {
      scene2Start = false;
      // console.log("Timed Out");
    }, delay);
  }
</script>

<style>
  .stickerClass {
    display: flex;
  }
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  #stickerContainer {
    display: flex;
    height: 40vh;
    /* justify-content: center; */
    align-items: flex-start;
    margin-top: 50vh;
    /* display: flex;
    position: absolute;
    justify-content: center;
    top: 45vh; */
  }
  #img01 {
    height: 25%;
    /* height: 25vh; */
    width: auto;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 42%;
    /* top: 35vh; */
  }
  /* #scticker01 {
    transform: scale(0.75);
    top: 80%;
    left: 10%;
  } */
  /* #scticker02 {
    transform: scale(0.75);
    top: 80%;
    left: 80%;
  } */
  #spacer {
    width: 50vw;
    /* width: 900px; */
  }
  .blinking-glow {
    width: 36%;
    height: 48%;
    /* width: 36vh;
    height: 30vh; */
    /* left: 50%;
    top: -55%; */
    position: absolute;
    top: 20%;
    /* top: 20vh; */
    transform: translateX(0%);
    border-radius: 48%;
    /* border-radius: 30vh; */
    background: #ff9900;
    /* filter: blur(400px); */
    animation: blinkIt 1.35s infinite;
  }

  @keyframes blinkIt {
    50% {
      opacity: 0.8;
    }
  }
</style>

<div id="flex-container">

  {#if scene2Start}
    <div
      class="blinking-glow"
      style="filter: blur({blinkingGlowBlurRadius}px)"
      in:blur={{ delay: 1000, duration: 2000 }}
      out:blur={{ delay: 0, duration: 2000 }} />
    <img
      in:blur={{ delay: 1000, duration: 2000 }}
      out:blur={{ delay: 0, duration: 2000 }}
      on:outroend={scene2Ended}
      id="img01"
      src="./media/cakes/03.png"
      alt="" />
  {/if}
  <div id="stickerContainer">
    {#if scene2Start}
      <img
        class="stickerClass"
        id="scticker01"
        style="width: {hummingResizeWidth}px; height: {hummingResizeHeight}px"
        src="./media/usagyuuun/humming.gif"
        alt=""
        in:fly={{ delay: 500, duration: 1000, x: -100, easing: cubicOut }}
        out:blur={{ delay: 0, duration: 2000 }} />
    {/if}
    <span id="spacer" />
    {#if scene2Start}
      <img
        class="stickerClass"
        id="scticker02"
        style="width: {hummingResizeWidth}px; height: {hummingResizeHeight}px"
        src="./media/usagyuuun/humming.gif"
        alt=""
        in:fly={{ delay: 2000, duration: 1000, x: 100, easing: cubicOut }}
        out:blur={{ delay: 0, duration: 2000 }}
        on:introend={() => startCountDown(3500)} />
    {/if}
  </div>
</div>
