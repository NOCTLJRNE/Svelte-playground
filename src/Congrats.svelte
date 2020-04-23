<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    elasticOut,
    cubicIn,
    cubicOut,
    circIn,
    circOut
  } from "svelte/easing";
  let controlsVisible = true;
  let emojisCount = 40;
  let emojisRevRate = 0;
  let windSpeed = 0;
  let emojisFallRate = 4;
  let timer1 = null;
  let emojis = ["❄️"];
  let rainStopped = false;
  let sway = false;
  let oscillateSpeed = false;
  let heartsActivated = false;
  let characters = [
    "🥳",
    "🙃",
    "🎉",
    "🌞",
    "✨",
    "🎂",
    "🎁",
    "🍀",
    "❤️",
    "💰",
    "💩",
    "❄️"
  ];
  // let characters = ["❄️"];
  let sound01;
  // let confetti = new Array(100)
  function showEmojis(emojis) {
    if (emojis.length === 1) return emojis[0];
    else {
      let temp = `${emojis.slice(0, -1).join(", ")} and ${
        emojis[characters.length - 1]
      }`;
      return temp;
    }
  }
  $: confetti = new Array(emojisCount)
    .fill()
    .map((_, i) => {
      return {
        // character: characters[i % characters.length],
        character: emojis[i % emojis.length],
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        r: 0.1 + Math.random(0.7) * 1,
        t: 0
      };
    })
    .sort((a, b) => a.r - b.r);

  let heartsArray = new Array(emojisCount)
    .fill()
    .map((_, i) => {
      return {
        // character: characters[i % characters.length],
        character: "❤️",
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: 0.1 + Math.random(0.7) * 1,
        t: 0
      };
    })
    .sort((a, b) => a.r - b.r);
  onMount(() => {
    let frame;
    // Original code
    // function loop() {
    //   frame = requestAnimationFrame(loop);

    //   confetti = confetti.map(emoji => {
    //     emoji.y += 0.6 * emoji.r;
    //     if (emoji.y > 120) emoji.y = -20;
    //     return emoji;
    //   });
    // }
    console.log(
      `width: ${window.screen.width}, height: ${window.screen.height},`
    );

    function loop() {
      frame = requestAnimationFrame(loop);

      confetti = confetti.map((emoji, i) => {
        emoji.y += (emojisFallRate / 10) * emoji.r;
        // if (emoji.y > 120) emoji.y = -20;
        if (emoji.y > 120 && !rainStopped) emoji.y = -20;
        if (emoji.x > 120 && !rainStopped) emoji.x = -10;
        if (emoji.x < -20 && !rainStopped) emoji.x = -110;
        let c = i % 2 ? 1 : -1;
        if (sway) {
          let dx = c * Math.cos(0.1 * emoji.y);

          emoji.x += dx * emoji.r * 0.25;
        }
        if (oscillateSpeed) {
          // let temp = emoji.r;
          // let temp2 = (0.3 * emoji.y) / temp;
          emoji.t = 0.25 * Math.cos(0.4 * emoji.y);
        }
        if (windSpeed != 0) {
          emoji.x += (emoji.r * windSpeed) / 10;
        }
        // emoji rev rate
        if (emojisRevRate != 0) {
          emoji.t = (emojisRevRate * 0.5 * emoji.y) / 100;
        }
        // if (emoji.x > 120) emoji.x = -20;
        return emoji;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });

  function toggleIcons() {
    console.log(emojis);
    // characters =
    //   JSON.stringify(characters) == JSON.stringify(["❄️"])
    //     ? ["🥳", "🎉", "✨", "🎂", "🎁", "💰", "💩"]
    //     : ["❄️"];
    emojis =
      JSON.stringify(emojis) == JSON.stringify([""])
        ? ["🥳", "🎉", "✨", "🎂", "🎁", "💰", "💩", "❄️"]
        : [""];
    console.log(emojis);
    confetti = new Array(emojisCount)
      .fill()
      .map((_, i) => {
        return {
          character: emojis[i % emojis.length],
          x: Math.random() * 100,
          y: -20 - Math.random() * 100,
          r: 0.1 + Math.random(0.7) * 1,
          t: 0
        };
      })
      .sort((a, b) => a.r - b.r);
  }
  function toggleSelector() {
    controlsVisible = !controlsVisible;
  }
  function emojiClickHandler(i) {
    console.log(`emoji ${i} clicked`);
    sound01.play();
    confetti[i].character = "💩";
  }
  function toggleTheRain() {
    rainStopped = !rainStopped;
  }
  function toggleHearts() {
    heartsActivated = !heartsActivated;
    if (heartsActivated) {
      heartsArray = new Array(emojisCount)
        .fill()
        .map((_, i) => {
          return {
            // character: characters[i % characters.length],
            character: "❤️",
            x: Math.random() * 100,
            y: Math.random() * 100,
            r: 0.1 + Math.random(0.7) * 1,
            t: 0
          };
        })
        .sort((a, b) => a.r - b.r);
    }
  }
  function startBeating() {
    timer1 = setInterval(() => {
      heartsActivated = !heartsActivated;
      if (heartsActivated) {
        heartsArray = new Array(emojisCount)
          .fill()
          .map((_, i) => {
            return {
              // character: characters[i % characters.length],
              character: "❤️",
              x: Math.random() * 100,
              y: Math.random() * 100,
              r: 0.1 + Math.random(0.7) * 1,
              t: 0
            };
          })
          .sort((a, b) => a.r - b.r);
      }
    }, 500);
  }
  function stopBeating() {
    clearInterval(timer1);
  }
  function appearScaleOut(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = circOut(t);

        return `
          transform: scale(${eased});
          opacity: ${eased};`;
      }
    };
  }
  function fadeScaleOut(node, { duration }) {
    return {
      duration,
      css: (t, u) => {
        // u = 1-t
        const circEasedIn = circIn(t);
        const circEasedIn2 = circIn(u);
        const circEasedOut = circOut(t);
        const circGrowOut = circOut(u);
        const cubicEasedIn = cubicIn(t);
        const cubicEasedIn2 = cubicIn(u);
        const cubicEasedOut = cubicOut(t);
        const cubicGrowOut = cubicOut(u);
        const c1 = 4;
        const c2 = 4;
        return `
          transform: scale(${1 + c1 * circEasedIn2});
          opacity: ${cubicEasedIn};`;
      }
    };
  }
  function revRateChanged(event) {
    // console.log(event.target.value);
    oscillateSpeed = false;
  }
  function oscillateSpeedChange(event) {
    emojisRevRate = 0;
  }
  function toggleSwaying() {
    emojisRevRate = 0;
    oscillateSpeed = !oscillateSpeed;
  }
</script>

<style>
  /* :global(body) {
    overflow: hidden;
  } */
  .emojiInput {
    margin: 1vh 0vw 1vh 1.5vw;
  }
  .emojiDroplet {
    position: absolute;
    font-size: 5vw;
    cursor: grab;
  }
  .heartDroplet {
    position: absolute;
    font-size: 5vw;
  }
</style>

<button on:click={toggleSelector}>
  {controlsVisible ? 'Hide' : 'Show'} Controls
</button>
<br />
{#if controlsVisible}
  <label>
    <input type="number" bind:value={emojisCount} min="10" max="100" />
    <span>Emojis Count</span>
    <input type="range" bind:value={emojisCount} min="10" max="100" />
  </label>
  <label>
    <input type="number" bind:value={emojisFallRate} min="1" max="10" />
    <span>Falling Speed</span>
    <input type="range" bind:value={emojisFallRate} min="1" max="10" />
  </label>
  <label>
    <input
      on:input={revRateChanged}
      type="number"
      bind:value={emojisRevRate}
      min="-20"
      max="20" />
    <span>Make'em Spin !</span>
    <input
      on:input={revRateChanged}
      type="range"
      bind:value={emojisRevRate}
      min="-20"
      max="20" />
  </label>
  <label>
    <input type="number" bind:value={windSpeed} min="-20" max="20" />
    <span>Breeze 🎐</span>
    <input type="range" bind:value={windSpeed} min="-20" max="20" />
  </label>
  <button on:click={toggleSwaying}>
    {oscillateSpeed ? 'Stop' : 'Start'} Swaying
  </button>
  <br />
  {#each characters as emoji}
    <input
      class="emojiInput"
      type="checkbox"
      bind:group={emojis}
      value={emoji} />
    {emoji}
  {/each}
  <br />
  <button on:click={toggleIcons}>Toggle Icons</button>
  <button on:click={() => (sway = !sway)}>Fluttering 🍃</button>
  <button on:click={toggleTheRain}>
    {rainStopped ? 'Start' : 'Stop'} the 🌧️
  </button>
  <!-- <button on:click={toggleHearts}>
    {heartsActivated ? 'Destroy' : 'Create'} Hearts
  </button> -->
  <button on:click={startBeating}>Start Beating</button>
  <button on:click={stopBeating}>Stop Beating</button>
{/if}
{#each confetti as c, i}
  <span
    on:click={() => emojiClickHandler(i)}
    class="emojiDroplet"
    style="left: {c.x}%; top: {c.y}%; transform: scale({c.r}) rotate({c.t}turn)">
    {c.character}
  </span>
{/each}
{#if heartsActivated}
  {#each heartsArray as heart, i}
    <span
      class="heartDroplet"
      in:appearScaleOut={{ duration: 500 }}
      out:fadeScaleOut={{ duration: 500 }}
      style="left: {heart.x}%; top: {heart.y}%; transform: scale({heart.r})">
      {heart.character}
    </span>
    <!-- note: the transiton total duration must exactly match the timer, otherwise emoji scale will be reverted-->
  {/each}
{/if}
<audio bind:this={sound01} src="./p-ping.mp3" />
