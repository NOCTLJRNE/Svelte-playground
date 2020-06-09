<script>
  import { onMount, onDestroy } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut, sineIn } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene4Start = false;
  export let bgm2Delay;
  export let bgm2Ended = false;
  const DANCINGSPEED = 0.2;
  const UNIT = "%";
  const STARTING_POINT = 5;
  const ENDING_POINT = 75;
  let heartsActivated = false;
  let startDancing = false;
  let scticker01Visible = false;
  let scticker02Visible = false;
  let direction = 1;
  let emoji1XLeft = 3;
  let emoji1XLeftString = "3%";
  let emoji1XRight = null;
  let emoji1XRightString = "auto";
  let emoji2XLeft = null;
  let emoji2XLeftString = "auto";
  let emoji2XRight = 3;
  let emoji2XRightString = "3%";
  let emoji3X = 3;
  let emoji1ScaleX = 0.6;
  let emoji1ScaleY = 0.6;
  let emoji2ScaleX = -0.6;
  let emoji2ScaleY = 0.6;
  const X_MAX = 93;
  const X_MIN = 3;
  const Y_MAX = 90;
  const Y_MIN = 3;
  const beatPeriod = 2500;
  const beatIntroDelay = 1600;
  const emojisCount = 30;
  const emojisSelection = [
    "🥳",
    "🎁",
    "🍀",
    "🎂",
    "💰",
    "🏘️",
    "🚗",
    "🗼",
    "❤️"
  ];
  let emojiIndex = 0;
  let dropTheBeatCount = 0;
  let timer1 = null;
  let emojisArray = new Array(emojisCount)
    .fill()
    .map((_, i) => {
      return {
        // character: characters[i % characters.length],
        character: emojisSelection[emojiIndex],
        x: Math.random() * (X_MAX - X_MIN) + X_MIN,
        y: Math.random() * (Y_MAX - Y_MIN) + Y_MIN,
        r: 0.1 + Math.random(0.7) * 1,
        t: 0
      };
    })
    .sort((a, b) => a.r - b.r);
  onMount(() => {
    setTimeout(() => {
      dropTheEmojis(); // replace this with the beating effect
      timer1 = setInterval(() => {
        if (!bgm2Ended) {
          dropTheBeatCount += 1;
          if (dropTheBeatCount === 1) {
            scticker01Visible = true;
          } else if (dropTheBeatCount === 2) {
            scticker02Visible = true;
          } else if (dropTheBeatCount === 3) {
            startDancing = true;
          }
          console.log("dropTheBeatCount: ", dropTheBeatCount);
          dropTheEmojis(); // replace this with the beating effect
        } else {
          clearInterval(timer1);
        }
      }, beatPeriod);
      let frame;
      function loop() {
        frame = requestAnimationFrame(loop);
        if (startDancing) {
          if (emoji1XLeft >= ENDING_POINT && direction === 1) {
            direction = -1;
            emoji1ScaleX = 0.6 * direction;
            emoji2ScaleX = -0.6 * direction;
          }
          if (emoji1XLeft <= STARTING_POINT && direction === -1) {
            direction = 1;
            emoji1ScaleX = 0.6 * direction;
            emoji2ScaleX = -0.6 * direction;
          }
          emoji1XLeft += DANCINGSPEED * direction;
          emoji2XRight += DANCINGSPEED * direction;
          emoji1XLeftString = emoji1XLeft + UNIT;
          emoji2XRightString = emoji2XRight + UNIT;
        }
      }
      loop();
      return () => cancelAnimationFrame(frame);
    }, bgm2Delay + beatIntroDelay);
  });
  onDestroy(() => {
    clearInterval(timer1);
  });
  function dropTheEmojis() {
    emojisArray = emojisArray
      .map((_, i) => {
        return {
          // character: characters[i % characters.length],
          character: emojisSelection[emojiIndex],
          x: Math.random() * (X_MAX - X_MIN) + X_MIN,
          y: Math.random() * (Y_MAX - Y_MIN) + Y_MIN,
          r: 0.1 + Math.random(0.7) * 1,
          t: 0
        };
      })
      .sort((a, b) => a.r - b.r);
    heartsActivated = true;
    emojiIndex = (emojiIndex + 1) % emojisSelection.length;
    setTimeout(() => (heartsActivated = false), 1000);
  }
  function appearScaleOut(node, { duration, index }) {
    return {
      duration,
      css: t => {
        const eased = circOut(t);
        const scaledEased = eased * emojisArray[index].r;
        if (t === 1) {
          // console.log("node index: ", index);
          emojisArray[index].r = scaledEased;
        }

        return `
          transform: scale(${scaledEased});
          opacity: ${eased};`;
      }
    };
  }
  function fadeScaleOut(node, { duration, index, radius }) {
    return {
      duration,
      css: (t, u) => {
        // u = 1-t
        const sineEasedIn = sineIn(t);
        const circEasedIn2 = circIn(u);
        const cubicEasedIn2 = cubicIn(u);
        const c1 = 4;
        const c2 = 4;
        const r = radius * cubicEasedIn2 * emojisArray[index].r;
        return `
          filter: blur(${r}vh);
          transform: scale(${emojisArray[index].r + c1 * circEasedIn2});
          opacity: ${sineEasedIn};`;
      }
    };
  }
</script>

<style>
  .heartDroplet {
    position: absolute;
    font-size: 5vw;
    z-index: 2;
  }
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  /* .stickerContainer {
    display: flex;
    position: absolute;
    justify-content: center;
    top: 45vh;
    z-index: 0.5;
  } */
  #scticker01 {
    /* transform: scale(0.6); */
    position: absolute;
    top: 1%;
    /* right: auto; */
    /* left: 3%; */
    /* top: 80%;
    left: 10%; */
  }
  #scticker02 {
    /* transform: scaleX(-0.6) scaleY(0.6); */
    position: absolute;
    bottom: 3%;
    /* left: auto; */
    /* right: 3%; */
    /* top: 80%;
    left: 80%; */
  }
  /* #spacer {
    width: 500px;
  } */
</style>

<div id="flex-container">
  {#if scene4Start}
    <p>Scene 4</p>
  {/if}
  {#if heartsActivated}
    {#each emojisArray as heart, i}
      <span
        class="heartDroplet"
        in:appearScaleOut={{ duration: 500, index: i }}
        out:fadeScaleOut={{ radius: 5, duration: 500, index: i }}
        style="left: {heart.x}%; top: {heart.y}%; transform: scale({heart.r})">
        {heart.character}
      </span>
      <!-- note: the transiton total duration must exactly match the timer, otherwise emoji scale will be reverted-->
    {/each}
  {/if}
  {#if scticker01Visible}
    <img
      class="stickerClass"
      id="scticker01"
      src="./media/usagyuuun/partying.gif"
      alt=""
      style="left: {emoji1XLeftString}; right: {emoji1XRightString}; transform:
      scaleX({emoji1ScaleX}) scaleY({emoji1ScaleY})" />
  {/if}
  {#if scticker02Visible}
    <img
      class="stickerClass"
      id="scticker02"
      src="./media/usagyuuun/partying.gif"
      alt=""
      style="left: {emoji2XLeftString};right: {emoji2XRightString}; transform:
      scaleX({emoji2ScaleX}) scaleY({emoji2ScaleY})" />
  {/if}

</div>
