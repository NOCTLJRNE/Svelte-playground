<script>
  //   import HAPPY_UpSandyBrown from "../svg/HAPPY_UpSandyBrown.svelte";
  import HAPPY_UpSandyBrown_Center from "../svg/HAPPY_UpSandyBrown_Center.svelte";
  import BIRTHDAY_UpSandyBrown from "../svg/BIRTHDAY_UpSandyBrown.svelte";
  import { onMount, onDestroy } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import {
    elasticOut,
    elasticIn,
    backIn,
    backOut,
    cubicIn,
    cubicOut,
    circIn,
    circOut,
    sineIn
  } from "svelte/easing";
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
  const emojisCount = emojisSelection.length * 2;
  let startHAPPY = false;
  let startBIRTHDAY = false;
  let showPhoto1 = false;
  let showPhoto2 = false;
  let showPhoto3 = false;
  let emojisArray = new Array(emojisCount).fill().map((_, i) => {
    return {
      character: emojisSelection[i % emojisSelection.length],
      x: Math.random() * 100,
      y: -20 - Math.random() * 100,
      r: 0.2 + Math.random() * (0.7 - 0.2),
      // z: 3
      z: i % 2 ? 3 : 1
    };
  });
  onMount(() => {
    setTimeout(() => {
      startHAPPY = true;
    }, 1000);
    let frame;
    // Original code
    function loop() {
      frame = requestAnimationFrame(loop);

      emojisArray = emojisArray.map(emoji => {
        emoji.y += 0.4 * emoji.r;
        if (emoji.y > 120) emoji.y = -20;
        return emoji;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
  function portraitDrop(node, { x, y, duration }) {
    return {
      duration,
      css: t => {
        const easedElasticIn = elasticIn(t);
        const easedCircOut = circOut(t);
        const easedBackOut = backOut(t);
        const easedBackIn = backIn(t);
        const angle = easedCircOut * 0.025;
        const fromLeft = easedBackOut * (15 - x) + x;
        const fromTop = easedCircOut * (40 - y) + y;
        if (t === 1) {
          // console.log("node index: ", index);
        }
        return `
          left: ${fromLeft}%; 
          top: ${fromTop}%; 
          transform: rotate(${angle}turn);
          opacity: ${easedCircOut};`;
      }
    };
  }
  function portaitBlur(node, { radius, duration }) {
    return {
      duration,
      css: t => {
        const circEasedOut = circOut(1 - t);
        const circEasedIn = circIn(1 - t);
        const sineEasedIn = sineIn(t);
        const r = radius * circEasedIn;
        return `
        filter: blur(${r}vh);
        opacity: ${sineEasedIn};
        `;
      }
    };
  }
  function portraitRotateIn(node, { duration }) {
    return {
      duration,
      css: t => {
        const easedCircOut = circOut(t);
        const angle = 30 * (1 - easedCircOut);
        // const angle = 30;
        return `
        transform: rotate3d(1, 1, 0.25, ${angle}deg);
        `;
      }
    };
  }
</script>

<style>
  .emojiDroplet {
    position: absolute;
    font-size: 4vw;
    /* cursor: grab; */
  }
  .unselectable {
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;

    /*
     Introduced in IE 10.
     See http://ie.microsoft.com/testdrive/HTML5/msUserSelect/
   */
    -ms-user-select: none;
    user-select: none;
  }
  .portrait {
    position: absolute;
  }
  #portrait_01 {
    left: 15%;
    top: 40%;
    width: 20vh;
    height: auto;
    transform: rotate(0.025turn);
    /* padding: 2px; */
    border: 4px solid;
    border-image: radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1;
    /* border: 2px solid #021a40;
    background-color: royalblue; */
  }
  #portrait_02 {
    left: 75%;
    top: 40%;
    width: 18vh;
    height: auto;
    border: 4px solid;
    border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1;
  }
  #portrait_03 {
    left: 45%;
    top: 40%;
    width: 18vh;
    height: auto;
    border: 4px solid;
    border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1;
  }
</style>

{#each emojisArray as c, i}
  <span
    class="emojiDroplet unselectable"
    style="left: {c.x}%; top: {c.y}%; z-index: {c.z};transform: scale({c.r})">
    {c.character}
  </span>
{/each}

<HAPPY_UpSandyBrown_Center
  {startHAPPY}
  on:finishedHAPPY={() => {
    startBIRTHDAY = true;
  }} />
<!-- <BIRTHDAY_UpSandyBrown /> -->
<BIRTHDAY_UpSandyBrown
  on:finishedBIRTHDAY={() => {
    showPhoto1 = true;
  }}
  {startBIRTHDAY} />
{#if showPhoto1}
  <img
    in:portraitDrop={{ x: 20, y: -5, duration: 1500 }}
    on:introend={() => {
      showPhoto2 = true;
    }}
    out:portaitBlur={{ radius: 20, duration: 1500 }}
    class="portrait"
    id="portrait_01"
    src="./media/kitty-06.jpg"
    alt="" />
{/if}
{#if showPhoto2}
  <img
    in:blur={{ duration: 1500 }}
    on:introend={() => {
      showPhoto3 = true;
    }}
    out:blur={{ duration: 1500 }}
    class="portrait"
    id="portrait_02"
    src="./media/kitty-06.jpg"
    alt="" />
{/if}
{#if showPhoto3}
  <img
    in:portraitRotateIn={{ duration: 1500 }}
    out:blur={{ duration: 1500 }}
    class="portrait"
    id="portrait_03"
    src="./media/kitty-06.jpg"
    alt="" />
{/if}
