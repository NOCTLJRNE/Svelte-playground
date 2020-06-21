<script>
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  //resize emojis based on screen resolution
  const happyHeight = 431;
  const happyWidth = 468;
  const happyRatioToScreenHeight = 0.4;
  const happyTargetHeight = happyRatioToScreenHeight * screen.height;
  const happyResizeRatio =
    Math.round((happyTargetHeight * 100) / happyHeight) / 100;
  const happyResizeWidth = happyWidth * happyResizeRatio;
  const happyResizeHeight = happyHeight * happyResizeRatio;

  //doing same thing for gift box*
  const giftHeight = 512;
  const giftWidth = 512;
  const giftRatioToScreenHeight = 0.75;
  const giftTargetHeight = giftRatioToScreenHeight * screen.height;
  const giftResizeRatio =
    Math.round((giftTargetHeight * 100) / giftHeight) / 100;
  const giftResizeWidth = giftWidth * giftResizeRatio;
  const giftResizeHeight = giftHeight * giftResizeRatio;
  let scene3Start = false;
  // export let scene3Start = false;
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
  let intervalStarted = false;
  let startFadingGift = false;
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
      if (gift.yPos < -80) {
        ySpeed = 0.2;
        dropCounter += 1;
      }
      if (gift.yPos > 10 && dropCounter >= 1) {
        destReached = true;
      }
      if (destReached && xAmplitude > 0.005) {
        xAmplitude -= 0.0001;
      }
      if (scene3Ended && gift.op > 0) {
        if (!intervalStarted) {
          setInterval(() => {
            startFadingGift = true;
          }, 1000);
          intervalStarted = true;
        }
        if (startFadingGift) {
          gift.op -= 0.01;
        }
      }
    }
    scene3Start = true;
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
    transform: scale(1);
    /* transform: scale(0.7); */
    /* top: 80%;
    left: 10%; */
  }
  #scticker02 {
    transform: scaleX(-1) scaleY(1);
    /* transform: scaleX(-0.7) scaleY(0.7); */
    /* top: 80%;
    left: 80%; */
  }
  #spacer {
    width: 40vw;
  }
</style>

<div id="flex-container">
  {#if scene3Start}
    <img
      id="balloon1"
      style="top: {gift.yPos}vh; width: {giftResizeWidth}px; height: {giftResizeHeight}px;transform:
      rotate({gift.angle}turn); opacity: {gift.op}; transform-origin: top"
      src="./media/boxes/heart-box.png"
      alt="" />
  {/if}
  <div id="stickerContainer">
    {#if scene3Start && !scene3Ended}
      <img
        class="stickerClass"
        id="scticker01"
        style="width: {happyResizeWidth}px; height: {happyResizeHeight}px"
        src="./media/usagyuuun/happy.gif"
        alt=""
        in:fly={{ delay: 500, duration: 1000, x: -100, easing: cubicOut }}
        out:blur={{ delay: 1000, duration: 2000 }} />
    {/if}
    <span id="spacer" />
    {#if scene3Start && !scene3Ended}
      <img
        class="stickerClass"
        id="scticker02"
        style="width: {happyResizeWidth}px; height: {happyResizeHeight}px"
        src="./media/usagyuuun/happy.gif"
        alt=""
        in:fly={{ delay: 500, duration: 1000, x: -100, easing: cubicOut }}
        out:blur={{ delay: 1000, duration: 2000 }}
        on:outroend={scene3EndedEvent} />
    {/if}
  </div>
</div>
