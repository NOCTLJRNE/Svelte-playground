<script>
  import { onMount, onDestroy } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut, sineIn } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene4Start = false;
  export let bgm2Delay;
  export let bgm2Ended = false;
  let heartsActivated = false;
  const X_MAX = 93;
  const X_MIN = 3;
  const Y_MAX = 90;
  const Y_MIN = 3;
  const beatPeriod = 2500;
  const beatIntroDelay = 1600;
  const emojisCount = 30;
  const emojisSelection = ["🎁", "🍀", "🎂", "💰", "🏘️", "🚗", "🗼", "❤️"];
  let emojiIndex = 0;
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
          dropTheEmojis(); // replace this with the beating effect
        } else {
          clearInterval(timer1);
        }
      }, beatPeriod);
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
  }
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
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
</div>
