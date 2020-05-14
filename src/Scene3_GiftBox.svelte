<script>
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene3Start = false;
  let gift = {
    yPos: -55
  };
  let rightIndexX = 30;
  let yConst = 1;
  let destReached = false;
  let dropCounter = 0;
  let showIndex = false;
  let startIndexAnimOnce = true;
  let counter = 0;
  onMount(() => {
    let frame;
    let ySpeed = 1;
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
      if (gift.yPos > 130) {
        gift.yPos = -55;
        ySpeed = 0.2;
        dropCounter += 1;
      }
      if (gift.yPos > 20 && dropCounter === 1) {
        destReached = true;
      }
      if (destReached && xAmplitude > 0.005) {
        xAmplitude -= 0.0001;
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
  #balloon1 {
    cursor: pointer;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -45vh;
  }
</style>

<div id="flex-container">
  {#if scene3Start}
    <img
      id="balloon1"
      style="top: {gift.yPos}vh; transform: rotate({gift.angle}turn);
      transform-origin: top"
      src="./media/boxes/heart-box.png"
      alt="" />
  {/if}
</div>
