<script>
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene3Start = false;
  export let scene3Ended = false;
  const dispatch = createEventDispatcher();
  let gift = {
    yPos: 135,
    // yPos: -55,
    op: 1
  };
  let rightIndexX = 30;
  let yConst = 1;
  let destReached = false;
  let dropCounter = 0;
  let showIndex = false;
  let startIndexAnimOnce = true;
  let counter = 0;
  function scene3EndedEvent() {
    dispatch("scene3EndedEvent", { message: "scene3 has ended !" });
  }
  onMount(() => {
    let frame;
    let ySpeed = -2.5;
    // let ySpeed = 1.5
    let xAmplitude = 0.035;
    function loop() {
      frame = requestAnimationFrame(loop);
      counter += 0.15;
      let rad = (counter % 20) / 10;
      //   console.log(rad);
      gift.angle = xAmplitude * Math.cos(Math.PI * rad);
      if (!destReached) {
        gift.yPos += yConst * ySpeed;
      } else {
        rightIndexX += 0.1 * Math.cos(2 * Math.PI * rad);
        // if (startIndexAnimOnce) {
        //   setTimeout(() => (showIndex = true), 2000);
        //   setTimeout(() => (showIndex = false), 6000);
        //   startIndexAnimOnce = false;
        // }
      }
      // if (gift.yPos > 130) {
      //   gift.yPos = -55;
      if (gift.yPos < -55) {
        ySpeed = 0.2;
        dropCounter += 1;
      }
      if (gift.yPos > 20 && dropCounter >= 1) {
        destReached = true;
      }
      if (destReached && xAmplitude > 0.005) {
        xAmplitude -= 0.0001;
      }
      if (scene3Ended && gift.op > 0) {
        gift.op -= 0.01;
      }
    }
    loop();
    return () => cancelAnimationFrame(frame);
  });
</script>

<style>
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  #stickerContainer {
    display: flex;
    position: absolute;
    justify-content: center;
    top: 45vh;
  }
  #balloon1 {
    cursor: pointer;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -45vh;
  }
  #scticker01 {
    transform: scale(0.7);
    /* top: 80%;
    left: 10%; */
  }
  #scticker02 {
    transform: scaleX(-0.7) scaleY(0.7);
    /* top: 80%;
    left: 80%; */
  }
  #spacer {
    width: 500px;
  }
</style>

<div id="flex-container">
  {#if scene3Start}
    <img
      id="balloon1"
      style="top: {gift.yPos}vh; transform: rotate({gift.angle}turn); opacity: {gift.op};
      transform-origin: top"
      src="./media/boxes/heart-box.png"
      alt=""
      out:blur={{ delay: 0, duration: 2000 }} />
  {/if}
  <div id="stickerContainer">
    {#if scene3Start && !scene3Ended}
      <img
        class="stickerClass"
        id="scticker01"
        src="./media/usagyuuun/happy.gif"
        alt=""
        in:fly={{ delay: 500, duration: 1000, x: -100, easing: cubicOut }}
        out:blur={{ delay: 0, duration: 2000 }} />
    {/if}
    <span id="spacer" />
    {#if scene3Start && !scene3Ended}
      <img
        class="stickerClass"
        id="scticker02"
        src="./media/usagyuuun/happy.gif"
        alt=""
        in:fly={{ delay: 500, duration: 1000, x: -100, easing: cubicOut }}
        out:blur={{ delay: 0, duration: 2000 }}
        on:outroend={scene3EndedEvent} />
    {/if}
  </div>
</div>
