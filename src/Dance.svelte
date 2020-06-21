<script>
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  let posX = 120;
  const stickersCount = 12;
  const stickersDirection = [-1, 1];
  const stickersName = ["twisting", "spinning", "crawling", "dancing"];
  let bgm1;
  let stickerArray = new Array(stickersCount).fill().map((_, i) => {
    let d = i % 2 ? 1 : -1;
    let clipping = stickersName[i % stickersName.length] == "twisting" ? 29 : 0;
    // let clipping = 29;
    return {
      x: i % 2 ? 80 + Math.random() * 20 : -20 + Math.random() * 20,
      y: Math.random() * 60,
      r: 0.5 * (0.1 + Math.random(0.7) * 1),
      name: stickersName[i % stickersName.length],
      d: d,
      c: clipping
    };
  });
  onMount(() => {
    let frame;
    bgm1.volume = 0.7;
    function loop() {
      frame = requestAnimationFrame(loop);
      posX -= 0.4;
      if (posX < -20) posX = 120;
      stickerArray = stickerArray.map((sticker, i) => {
        sticker.x = sticker.x - sticker.d * 0.4 * sticker.r; // with d=1, this is equivalent to moving emojito the left
        if (sticker.x < -20 && sticker.d == 1) {
          sticker.x = 80 + Math.random() * 20;
          sticker.y = Math.random() * 60;
          sticker.r = 0.5 * (0.1 + Math.random(0.7) * 1);
        } else if (sticker.x > 120 && sticker.d == -1) {
          sticker.x = -20 + Math.random() * 20;
          sticker.y = Math.random() * 60;
          sticker.r = 0.5 * (0.1 + Math.random(0.7) * 1);
        }
        return sticker;
      });
    }
    loop();
    return () => cancelAnimationFrame(frame);
  });
  function changeDirection(i) {
    // console.log(i);
    stickerArray[i].d = -stickerArray[i].d;
  }
</script>

<style>
  .dance1 {
    /* transform: scale(0.5); */
    height: 20vh;
  }
  .motion {
    position: absolute;
    height: 50vh;
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
    /* transform: scale(0.5) scaleX(-1); */
    transform: scaleX(-1);
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
        on:click={() => {
          changeDirection(i);
        }}
        style="left: {sticker.x}vw; top: {sticker.y}vh; transform: scaleX({sticker.d * sticker.r})
        scaleY({sticker.r}); clip-path: inset({sticker.c}% 0 0 0)"
        class="motion"
        src="./media/usagyuuun/{sticker.name}.gif"
        alt="" />
    {/each}
  </div>
  <audio
    bind:this={bgm1}
    autoplay
    loop
    src="./media/bgm/Worth_It_Intro_2.mp3" />
  <!-- <img
    style="clip-path: inset(29% 0 0 0);"
    src="./media/usagyuuun/twisting.gif"
    alt="" /> -->
</div>
