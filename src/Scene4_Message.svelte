<script>
  import { onMount, onDestroy } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut, sineIn } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene4Start = false;
  export let bgm2Delay;
  export let bgm2Ended = false;
  const introText = "Let's have something more lively !";
  const DANCINGSPEED = 0.2;
  const UNIT = "%";
  const STARTING_POINT = 5;
  const ENDING_POINT = 75;

  //resize emojis based on screen resolution
  const partyingHeight = 497;
  const partyingWidth = 476;
  const partyingRatioToScreenHeight = 0.35;
  const partyingTargetHeight = partyingRatioToScreenHeight * screen.height;
  const partyingResizeRatio =
    Math.round((partyingTargetHeight * 100) / partyingHeight) / 100;
  const partyingResizeWidth = partyingWidth * partyingResizeRatio;
  const partyingResizeHeight = partyingHeight * partyingResizeRatio;

  const spinningHeight = 479;
  const spinningWidth = 360;
  const spinningRatioToScreenHeight = 0.3;
  const spinningTargetHeight = spinningRatioToScreenHeight * screen.height;
  const spinningResizeRatio =
    Math.round((spinningTargetHeight * 100) / spinningHeight) / 100;
  const spinningResizeWidth = spinningWidth * spinningResizeRatio;
  const spinningResizeHeight = spinningHeight * spinningResizeRatio;

  const twistingHeight = 485;
  const twistingWidth = 347;
  const twistingRatioToScreenHeight = 0.3;
  const twistingTargetHeight = twistingRatioToScreenHeight * screen.height;
  const twistingResizeRatio =
    Math.round((twistingTargetHeight * 100) / twistingHeight) / 100;
  const twistingResizeWidth = twistingWidth * twistingResizeRatio;
  const twistingResizeHeight = twistingHeight * twistingResizeRatio;

  let heartsActivated = false;
  let introTextVisible = false;
  let startDancing = false;
  let scticker01Visible = false;
  let scticker02Visible = false;
  let lastMessageVisible = false;
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
  let message01;
  const X_MAX = 96;
  const X_MIN = 0;
  const Y_MAX = 94;
  const Y_MIN = 0;
  const beatPeriod = 2500;
  const beatIntroDelay = 1600;
  const emojisCount = 40;
  const emojisSelection = [
    "🥳",
    "🎁",
    "🍀",
    // "🎂",
    "🥗",
    "💰",
    "🏘️",
    "🚗",
    // "🗼",
    "❤️"
  ];
  const outroText = "... Hope your life will be filled with";
  const outroEmojis =
    emojisSelection.slice(0, emojisSelection.length - 1).join(", ") +
    " & " +
    emojisSelection[emojisSelection.length - 1];
  const outroFullText =
    outroText +
    "\n" +
    emojisSelection.slice(0, emojisSelection.length - 1).join(", ") +
    " & " +
    emojisSelection[emojisSelection.length - 1];
  let messagesIndex = 0;
  const messages = [
    "..Happiness..",
    "..Lot of Gifts..",
    "..Luck..",
    "..Health..",
    "..$$$..",
    "..more Wealth..",
    "..even more Wealth.. :D",
    // "Travel",
    "..& Love.."
  ];
  const STICKERCOUNT = 4;
  const stickersName = ["twisting", "spinning"];
  let stickerArray = new Array(STICKERCOUNT).fill().map((_, i) => {
    let d = i % 2 ? 1 : -1;
    let clipping = i < 2 ? 29 : 0; // only clip twisting sticker
    // let clipping = 29;
    return {
      x: i % 2 ? 120 : -20,
      y: i < 2 ? Math.random() * 30 + 30 * i : Math.random() * 60,
      r: 0.5 + Math.random() * (1 - 0.5),
      // r: (0.2 + Math.random() * (0.5 - 0.2)),
      name: i < 2 ? "twisting" : "spinning", // first half array is twisting
      d: d,
      c: clipping,
      w: i < 2 ? twistingResizeWidth : spinningResizeWidth,
      h: i < 2 ? twistingResizeHeight : spinningResizeHeight
    };
  });
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
    // console.log("outroFullText: ", outroFullText);
    // console.log("message01 width: ", message01.width);
    introTextVisible = true;
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
            // startDancing = true;
          }
          // console.log("dropTheBeatCount: ", dropTheBeatCount);
          dropTheEmojis(); // replace this with the beating effect
        } else {
          clearInterval(timer1);
        }
        // for (let i = 0; i < 2; i++) {
        //   stickerArray[i].d = -stickerArray[i].d;
        // }
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
        stickerArray = stickerArray.map((sticker, i) => {
          sticker.x = sticker.x - sticker.d * 0.4 * sticker.r;
          if (i < 2) {
            // if the sticker is twisting
            if (sticker.x < 20 && sticker.d == 1) {
              sticker.d = -1;
              // sticker.x = 80 + Math.random() * 20;
              // sticker.y = Math.random() * 60;
              // sticker.r = 0.5 * (0.1 + Math.random(0.7) * 1);
            } else if (sticker.x > 80 && sticker.d == -1) {
              sticker.d = 1;
              // sticker.x = -20 + Math.random() * 20;
              // sticker.y = Math.random() * 60;
              // sticker.r = 0.5 * (0.1 + Math.random(0.7) * 1);
            }
          } else {
            //spinning
            if (sticker.x < -20 && sticker.d == 1) {
              sticker.x = 100;
              sticker.y = Math.random() * (Y_MAX - Y_MIN) + Y_MIN;
            } else if (sticker.x > 100 && sticker.d == -1) {
              sticker.x = 0;
              sticker.y = Math.random() * (Y_MAX - Y_MIN) + Y_MIN;
            }
          }
          return sticker;
        });
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
    // messagesIndex = emojiIndex;
    // console.log("messagesIndex: ", messagesIndex);
    emojiIndex += 1;
    // emojiIndex = (emojiIndex + 1) %1;
    if (emojiIndex == emojisSelection.length) {
      clearInterval(timer1);
      // display the final message
      setTimeout(() => {
        lastMessageVisible = true;
      }, beatPeriod);
    }
    setTimeout(() => {
      heartsActivated = false;
      messagesIndex = (messagesIndex + 1) % messages.length;
    }, 1000);
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
        // const c2 = 4;
        // const r = radius * cubicEasedIn2 * emojisArray[index].r;
        return `
          transform: scale(${emojisArray[index].r + c1 * circEasedIn2});
          opacity: ${sineEasedIn};`;
        // return `
        //   filter: blur(${r}vh);
        //   transform: scale(${emojisArray[index].r + c1 * circEasedIn2});
        //   opacity: ${sineEasedIn};`;
      }
    };
  }
</script>

<style>
  .heartDroplet {
    position: absolute;
    font-size: 5vw;
    z-index: 1;
  }
  .motion {
    position: absolute;
    z-index: 3;
    /* height: 50vh; */
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
    transform: scale(1);
    position: absolute;
    top: 0%;
    z-index: 2;
    /* right: auto; */
    /* left: 3%; */
    /* top: 80%;
    left: 10%; */
  }
  #scticker02 {
    transform: scaleX(-1) scaleY(1);
    position: absolute;
    bottom: 0%;
    z-index: 2;
    /* left: auto; */
    /* right: 3%; */
    /* top: 80%;
    left: 80%; */
  }
  /* #spacer {
    width: 500px;
  } */
  #message1 {
    padding-top: 20vh;
    font-family: "Sriracha", serif;
    font-size: 8vh;
    color: sandybrown;
  }

  #message2 {
    position: absolute;
    z-index: 4;
    margin-top: 20vh;
    font-family: "Sriracha", serif;
    font-size: 8vh;
    color: sandybrown;
  }
  #message3Wrapper {
    position: absolute;
    z-index: 4;
    left: 50%;
    padding-top: 35vh;
    font-family: "Sriracha", serif;
    font-size: 8vh;
    color: sandybrown;
  }
  #message3 {
    position: relative;
    left: -50%;
    width: 90vw;
  }
  #message4 {
    position: absolute;
    z-index: 4;
    padding-top: 40vh;
    font-family: "Sriracha", serif;
    font-size: 8vh;
    color: sandybrown;
  }
</style>

{#if introTextVisible}
  <h3
    id="message1"
    bind:this={message01}
    in:fly={{ duration: 700, x: -100 }}
    out:fly={{ duration: 700, x: 100 }}
    on:introend={() => {
      setInterval(() => {
        introTextVisible = false;
      }, 2000);
    }}>
    {introText}
  </h3>
{/if}
{#if lastMessageVisible}
  <div id="message3Wrapper" in:fade={{ duration: 500 }}>
    <h3 id="message3">
      {outroText}
      <br />
      {outroEmojis}
    </h3>
  </div>
  <!-- <h3 id="message4" in:fade={{ duration: 500 }}>{outroEmojis}</h3> -->
{/if}
<div id="flex-container">
  {#if scene4Start}
    <!-- <p>Scene 4</p> -->
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

    <h3 id="message2" in:fade={{ duration: 500 }} out:fade={{ duration: 500 }}>
      {messages[messagesIndex]}
    </h3>
  {/if}
  {#if scticker01Visible}
    <img
      class="stickerClass"
      id="scticker01"
      src="./media/usagyuuun/partying.gif"
      alt=""
      style="left: {emoji1XLeftString}; right: {emoji1XRightString}; width: {partyingResizeWidth}px;
      height: {partyingResizeHeight}px" />
  {/if}
  {#if scticker02Visible}
    <img
      class="stickerClass"
      id="scticker02"
      src="./media/usagyuuun/partying.gif"
      alt=""
      style="left: {emoji2XLeftString};right: {emoji2XRightString}; width: {partyingResizeWidth}px;
      height: {partyingResizeHeight}px" />
  {/if}
  {#each stickerArray as sticker, i}
    <img
      style="left: {sticker.x}%; top: {sticker.y}vh; transform: scaleX({sticker.d})
      scaleY(1); width: {sticker.w * sticker.r}px; height: {sticker.h * sticker.r}px;
      clip-path: inset({sticker.c}% 0 0 0)"
      class="motion"
      src="./media/usagyuuun/{sticker.name}.gif"
      alt="" />
    <!-- <img
      style="left: {sticker.x}vw; top: {sticker.y}vh; transform: scaleX({sticker.d * sticker.r})
      scaleY({sticker.r}); clip-path: inset({sticker.c}% 0 0 0)"
      class="motion"
      src="./media/usagyuuun/{sticker.name}.gif"
      alt="" /> -->
  {/each}
</div>
