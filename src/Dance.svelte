<script>
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  let posX = 120;
  const stickersCount = 9;
  const stickersName = ["running", "spinning", "crawling"];
  let stickerArray = new Array(9).fill().map((_, i) => {
    return {
      x: 80 + Math.random() * 20,
      y: Math.random() * 60,
      r: 0.5 * (0.1 + Math.random(0.7) * 1),
      name: stickersName[i % 3]
    };
  });
  onMount(() => {
    let frame;
    function loop() {
      frame = requestAnimationFrame(loop);
      posX -= 0.4;
      if (posX < -20) posX = 120;
      stickerArray = stickerArray.map((sticker, i) => {
        sticker.x -= 0.4 * sticker.r;
        if (sticker.x < -20) {
          sticker.x = 80 + Math.random() * 20;
          sticker.y = Math.random() * 60;
          sticker.r = 0.5 * (0.1 + Math.random(0.7) * 1);
        }
        return sticker;
      });
    }
    loop();
    return () => cancelAnimationFrame(frame);
  });
</script>

<style>
  .dance1 {
    transform: scale(0.5);
  }
  .motion {
    position: absolute;
  }
  /* .spacer {
    display: inline-block;
    width: 40%;
  } */
  #danceContainer {
    height: 100%;
    background: rgb(41, 41, 41);
  }
  #container1 {
    display: flex;
    justify-content: space-between;
  }
  #container2 {
    /* display: flex;
    justify-content: start; */
    text-align: left;
  }
  #danceImg2 {
    transform: scale(0.5) scaleX(-1);
  }
  #takingImg1 {
    /* margin-left: 15vw; */
    position: absolute;
    left: 25vw;
    top: 12vh;
  }
  #givingImg1 {
    position: absolute;
    left: 40vw;
    top: 12vh;
    /* margin-right: 15vw; */
  }
  #runningImg1 {
    position: absolute;
  }
</style>

<div id="danceContainer">
  <h1 id="h2-01">
    <a href="/" use:link>Back to 🏠🏠🏠</a>
  </h1>
  <div id="container1">
    <img
      class="dance1"
      id="danceImg1"
      src="./media/usagyuuun/partying.gif"
      alt="" />

    <img
      class="dance1"
      id="danceImg2"
      src="./media/usagyuuun/partying.gif"
      alt="" />
  </div>
  <div id="container2">
    <img
      class="dance1"
      id="takingImg1"
      src="./media/usagyuuun/taking.gif"
      alt="" />

    <img
      class="dance1"
      id="givingImg1"
      src="./media/usagyuuun/giving.gif"
      alt="" />
  </div>
  <div id="container3">
    <!-- <img
      style="left: {posX}vw; transform: scale(0.5)"
      class="dance1"
      id="runningImg1"
      src="./media/usagyuuun/crawling.gif"
      alt="" /> -->
    {#each stickerArray as sticker, i}
      <img
        style="left: {sticker.x}vw; top: {sticker.y}vh; transform: scale({sticker.r})"
        class="motion"
        src="./media/usagyuuun/{sticker.name}.gif"
        alt="" />
    {/each}
  </div>
</div>
