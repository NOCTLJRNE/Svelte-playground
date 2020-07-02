<script>
  //   import HAPPY_UpSandyBrown from "../svg/HAPPY_UpSandyBrown.svelte";
  import HAPPY_UpSandyBrown_Center from "../svg/HAPPY_UpSandyBrown_Center.svelte";
  import BIRTHDAY_UpSandyBrown from "../svg/BIRTHDAY_UpSandyBrown.svelte";
  // import Kitty from "../svg/Kitty.svelte";
  import Photo_wide_2 from "../svg/Photo_wide_2.svelte";
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
    sineIn,
    linear
  } from "svelte/easing";
  const emojisSelection = [
    "🥳",
    "🎁",
    "🍀",
    // "🎂",
    "🍰",
    "🥗",
    "💰",
    "🏘️",
    "🚗",
    // "🗼",
    "❤️",
    "❄️"
  ];
  const emojisCount = emojisSelection.length * 2;
  const easing = linear;
  const speed = "0.3";
  const radius = "20";
  const duration = "1500";
  const portraitBorder = screen.width > 1200 ? 4 : 2;
  const photoHeight = 648.0;
  const photoWidth = 352.0;
  const photoRatio = photoWidth / photoHeight;
  const photoVHconstant = 255;
  const paintingRatioToScreenHeight = 1.8;
  const paintingTargetHeight = paintingRatioToScreenHeight * window.innerHeight;
  const paintingTargetWidth = photoRatio * paintingTargetHeight;
  // const errorMessage = "... Nhầm";
  const errorMessageSequence = [".", "..", "...", "... Nhầm"];
  let errorMessage = "";
  let timer1 = null;
  let errorMessageIndex = 0;
  let startHAPPY = false;
  let startBIRTHDAY = false;
  let showWrongPhoto1 = false;
  let showErrorMessage = false;
  let showPhoto1 = false;
  let showPhoto2 = false;
  let showPhoto3 = false;
  let showPhoto4 = false;
  let viewPort01;
  let viewPort02;
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
    // console.log("viewPort01 x: ", viewPort01.offsetLeft);
    // console.log("viewPort01 y: ", viewPort01.offsetTop);
    // console.log("viewPort02 x: ", viewPort02.offsetLeft);
    // console.log("viewPort02 y: ", viewPort02.offsetTop);
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
  function displayErrorMessage() {
    // console.log(errorMessageSequence[errorMessageIndex++]);
    errorMessage = errorMessageSequence[errorMessageIndex++];
    if (errorMessageIndex == errorMessageSequence.length) {
      clearInterval(timer1);
      setTimeout(() => {
        showErrorMessage = false;
        showWrongPhoto1 = false;
      }, 1000);
    }
  }
  const portraitDropFinalX = 2.5;
  const portraitDropFinalY = 10;
  function portraitDrop(node, { x, y, duration }) {
    return {
      duration,
      css: t => {
        const easedElasticIn = elasticIn(t);
        const easedCircOut = circOut(t);
        const easedBackOut = backOut(t);
        const easedBackIn = backIn(t);
        const angle = easedCircOut * 0.018;
        const fromLeft = easedBackOut * (portraitDropFinalX - x) + x;
        const fromTop = easedCircOut * (portraitDropFinalY - y) + y;
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
  function portrait2RotateIn(node, { duration, endAngle }) {
    return {
      duration,
      css: t => {
        const easedCircOut = circOut(t);
        // const easedCircIn = circIn(t);
        const startAngle = -60;
        const angle = startAngle * (1 - easedCircOut) + endAngle * easedCircOut;
        // const vect = 10 * (1 - t);
        const vect = 20 * (1 - easedCircOut);
        // const angle = 30 * (1 - easedCircOut);
        // const angle = 30;
        return `
        transform: rotate3d(${vect}, ${vect}, 1, ${angle}deg);
        opacity: ${easedCircOut}
        `;
      }
    };
  }
  function springIn(node, { duration, angle }) {
    return {
      duration,
      css: t => {
        const eased = elasticOut(t);

        return `transform: scale(${eased}) rotate(${angle}turn);`;
      }
    };
  }
  function springOut(node, { duration, angle }) {
    return {
      duration,
      css: t => {
        const eased = elasticIn(1 - t);

        return `transform: scale(${1 - eased}) rotate(${angle}turn);`;
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
  #errorMessage {
    padding-top: 22vh;
    font-family: "Sriracha", serif;
    font-size: 10vh;
    color: sandybrown;
  }
  #portrait_01 {
    /* left: 12%; */
    /* top: 40%; */
    width: 63vh;
    height: auto;
    transform: rotate(0.018turn);
    /* padding: 2px; */
    /* border: 4px solid; */
    /* border-image: radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1; */
    /* border: 2px solid #021a40;
    background-color: royalblue; */
  }
  #wrongPortrait_01 {
    left: 15%;
    top: 37%;
    width: 25vh;
    height: auto;
    transform: rotate(0.025turn);
  }
  #portrait_02 {
    left: 65%;
    /* left: 75%; */
    top: 4%;
    /* top: 40%; */
    width: 70vh;
    /* width: 25vh; */
    height: auto;
    /* border: 4px solid; */
    /* border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1; */
  }
  #wrongPortrait_02 {
    left: 75%;
    top: 37%;
    width: 25vh;
    transform: rotate(-0.025turn);
    height: auto;
  }
  #portrait_03 {
    left: 37.5%;
    top: 0%;
    width: 55vh;
    height: auto;
    /* border: 4px solid; */
    /* border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1; */
  }
  #wrongPortrait_03 {
    left: 45%;
    top: 37%;
    z-index: 0;
    width: 25vh;
    height: auto;
  }

  #viewPort03 {
    position: absolute;
    top: -31vh;
    left: 29vw;
    margin: auto;
    /* width: 105mm;
    height: 196mm; */
  }
</style>

{#each emojisArray as c, i}
  <span
    class="emojiDroplet unselectable"
    style="left: {c.x}%; top: {c.y}%; z-index: {c.z};transform: scale({c.r})">
    {c.character}
  </span>
{/each}

<!-- <div id="viewPort01" bind:this={viewPort01}> -->
<HAPPY_UpSandyBrown_Center
  {startHAPPY}
  on:finishedHAPPY={() => {
    startBIRTHDAY = true;
  }} />
<!-- <BIRTHDAY_UpSandyBrown /> -->
<!-- </div> -->
<!-- <div id="viewPort02" bind:this={viewPort02}> -->
<BIRTHDAY_UpSandyBrown
  on:finishedBIRTHDAY={() => {
    showWrongPhoto1 = true;
  }}
  {startBIRTHDAY} />
<!-- </div> -->
{#if showWrongPhoto1}
  <img
    style="border: {portraitBorder}px solid; border-image:
    radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1;"
    in:springIn={{ duration: 1500, angle: 0.025 }}
    on:introend={() => {
      showErrorMessage = true;
      timer1 = setInterval(displayErrorMessage, 500);
    }}
    out:springOut={{ duration: 1000, angle: 0.025 }}
    on:outroend={() => {
      setTimeout(() => {
        showPhoto1 = true;
      }, 750);
    }}
    class="portrait"
    id="wrongPortrait_01"
    src="./media/ID-photo-01.jpg"
    alt="" />
  <img
    style="border: {portraitBorder}px solid; border-image:
    radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1;"
    in:springIn={{ duration: 1500, angle: -0.025 }}
    out:springOut={{ duration: 1000, angle: -0.025 }}
    class="portrait"
    id="wrongPortrait_02"
    src="./media/ID-photo-01.jpg"
    alt="" />
  <img
    style="border: {portraitBorder}px solid; border-image:
    radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1;"
    in:springIn={{ duration: 1500, angle: 0 }}
    out:springOut={{ duration: 1000, angle: 0 }}
    class="portrait"
    id="wrongPortrait_03"
    src="./media/ID-photo-01.jpg"
    alt="" />
{/if}
{#if showErrorMessage}
  <h3
    id="errorMessage"
    in:fade={{ duration: 500 }}
    out:fade={{ duration: 500 }}>
    {errorMessage}
  </h3>
{/if}
{#if showPhoto1}
  <img
    style="border: {portraitBorder}px solid; border-image:
    radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1; left: {portraitDropFinalX}%;
    top: {portraitDropFinalY}%"
    in:portraitDrop={{ x: 20, y: -5, duration: 2000 }}
    on:introend={() => {
      showPhoto2 = true;
    }}
    out:portaitBlur={{ radius: 20, duration: 1500 }}
    class="portrait"
    id="portrait_01"
    src="./media/photo_beer_3.jpg"
    alt="" />
{/if}
{#if showPhoto2}
  <img
    style="transform: rotate(20deg);border: {portraitBorder}px solid;
    border-image: radial-gradient(rgb(0, 143, 104), rgb(209, 253, 203)) 1"
    in:portrait2RotateIn={{ duration: 2000, endAngle: 20 }}
    on:introend={() => {
      showPhoto3 = true;
    }}
    out:blur={{ duration: 1500 }}
    class="portrait"
    id="portrait_02"
    src="./media/photo_4.jpg"
    alt="" />
{/if}
<!-- {#if showPhoto3}
  <img
    style="border: {portraitBorder}px solid; border-image: conic-gradient(red,
    yellow, lime, aqua, blue, magenta, red) 1;"
    in:portraitRotateIn={{ duration: 1500 }}
    on:introend={() => {
      showPhoto4 = true;
    }}
    out:blur={{ duration: 1500 }}
    class="portrait"
    id="portrait_03"
    src="./media/photo_wide_2.jpg"
    alt="" />
{/if} -->
<!-- {#if showPhoto4}
  <div
    id="viewPort03"
    style="width: {paintingTargetHeight}px; height: {paintingTargetHeight}px">
    <Kitty {easing} {speed} {radius} {duration} />
  </div>
{/if} -->

{#if showPhoto3}
  <div
    id="viewPort03"
    style="width: {photoVHconstant * photoRatio}vh; height: {photoVHconstant}vh">
    <Photo_wide_2 {easing} {speed} {radius} {duration} />
  </div>
{/if}
<!-- width: {200 * photoRatio}vh; height: {200}vh -->
<!-- width: {paintingTargetWidth}px; height: {paintingTargetHeight}px -->
