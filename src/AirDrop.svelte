<script>
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
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
    function loop() {
      frame = requestAnimationFrame(loop);
      counter += 0.15;
      let rad = (counter % 20) / 10;
      //   console.log(rad);
      gift.angle = 0.035 * Math.cos(Math.PI * rad);
      if (!destReached) {
        gift.yPos += yConst * 0.2;
      } else {
        rightIndexX += 0.1 * Math.cos(2 * Math.PI * rad);
        if (startIndexAnimOnce) {
          setTimeout(() => (showIndex = true), 2000);
          setTimeout(() => (showIndex = false), 6000);
          startIndexAnimOnce = false;
        }
      }
      if (gift.yPos > 130) {
        gift.yPos = -55;
        dropCounter += 1;
      }
      if (gift.yPos > 20 && dropCounter === 1) {
        destReached = true;
      }
    }
    loop();
    console.log("It got here !!!");
    return () => cancelAnimationFrame(frame);
  });
</script>

<style>
  #airDropContainer {
    height: 100%;
    background: rgb(20, 20, 20);
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
  #rightIndex {
    position: absolute;
    transform: scale(2);
    top: 50vh;
  }
</style>

<div id="airDropContainer">
  <h1>
    <a href="/" use:link>Back to 🏠🏠🏠</a>
  </h1>
  <img
    id="balloon1"
    style="top: {gift.yPos}vh; transform: rotate({gift.angle}turn);
    transform-origin: top"
    src="./media/boxes/heart-box.png"
    alt="" />
  {#if showIndex}
    <span id="rightIndex" style="left: {rightIndexX}vw">👉</span>
  {/if}
</div>
