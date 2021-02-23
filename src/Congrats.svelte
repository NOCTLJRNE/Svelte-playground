<script>
  import { onMount } from "svelte";
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
  let showPhotos = false;
  let _heartBeatIntroEnded = false;
  // let characters = [
  //   "🥳",
  //   "🙃",
  //   "🎉",
  //   "🌞",
  //   "✨",
  //   "🎂",
  //   "🎁",
  //   "🍀",
  //   "❤️",
  //   "💰",
  //   "💩",
  //   "❄️"
  // ];
  let characters = ["🍮", "🍮", "🍮", "🍮"];
  let sound01;
  let soundVol1 = 5;
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
  // $: {
  //   sound01.volume = soundVol1 / 10;
  // }
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
    sound01.volume = soundVol1 / 10;
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
    }, 1500);
  }
  function stopBeating() {
    clearInterval(timer1);
  }
  function appearScaleOut(node, { duration, index }) {
    return {
      duration,
      css: t => {
        const eased = circOut(t);
        const scaledEased = eased * heartsArray[index].r;
        if (t === 1) {
          // console.log("node index: ", index);
          heartsArray[index].r = scaledEased;
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
        const r = radius * cubicEasedIn2 * heartsArray[index].r;
        return `
          filter: blur(${r}vh);
          transform: scale(${heartsArray[index].r + c1 * circEasedIn2});
          opacity: ${sineEasedIn};`;
      }
    };
  }
  function portraitDrop(node, { x, y, duration }) {
    return {
      duration,
      css: t => {
        const easedElasticIn = elasticIn(t);
        const easedCircOut = circOut(t);
        const easedBackOut = backOut(t);
        const easedBackIn = backIn(t);
        const angle = easedCircOut * 0.025;
        const fromLeft = easedBackOut * (10 - x) + x;
        const fromTop = easedCircOut * (10 - y) + y;
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
  function portraitDropEnd() {
    console.log("Portrait dropped");
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
  function heartBeatIntroEnded(index) {
    if (index == 1) {
      _heartBeatIntroEnded = true;
      // console.log("Heart Beat Intro ended");
    }
  }
  function heartBeatOutroStarted(index) {
    if (index == 1) {
      // console.log("Heart Beat Outro started");
    }
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
    /* cursor: grab; */
  }
  .heartDroplet {
    position: absolute;
    font-size: 5vw;
  }
  .portrait {
    position: absolute;
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
  #portrait_01 {
    left: 10%;
    top: 10%;
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
    left: 65%;
    top: 70%;
    width: 18vh;
    height: auto;
    border: 4px solid;
    border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1;
  }
  #portrait_03 {
    left: 10%;
    top: 70%;
    width: 18vh;
    height: auto;
    border: 4px solid;
    border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1;
  }
</style>

<button class="button is-primary" on:click={toggleSelector}>
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
  <label>
    <input type="range" bind:value={soundVol1} min="0" max="10" />
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
  <button on:click={() => (showPhotos = !showPhotos)}>
    {showPhotos ? 'Hide' : 'Show'} 🖼️
  </button>
{/if}
{#each confetti as c, i}
  <span
    on:click={() => emojiClickHandler(i)}
    class="emojiDroplet unselectable"
    style="left: {c.x}%; top: {c.y}%; transform: scale({c.r}) rotate({c.t}turn)">
    {c.character}
  </span>
{/each}
{#if heartsActivated}
  {#each heartsArray as heart, i}
    <span
      class="heartDroplet"
      in:appearScaleOut={{ duration: 1000, index: i }}
      out:fadeScaleOut={{ radius: 5, duration: 1000, index: i }}
      on:introend={() => {
        heartBeatIntroEnded(i);
      }}
      on:outrostart={() => {
        heartBeatOutroStarted(i);
      }}
      style="left: {heart.x}%; top: {heart.y}%; transform: scale({heart.r})">
      {heart.character}
    </span>
    <!-- note: the transiton total duration must exactly match the timer, otherwise emoji scale will be reverted-->
  {/each}
{/if}
<audio bind:this={sound01} src="./p-ping.mp3" />
{#if showPhotos}
  <img
    in:portraitDrop={{ x: 20, y: -5, duration: 1500 }}
    on:introend={portraitDropEnd}
    out:portaitBlur={{ radius: 20, duration: 1500 }}
    class="portrait"
    id="portrait_01"
    src="./media/kitty-06.jpg"
    alt="" />
{/if}
{#if showPhotos}
  <img
    in:blur={{ duration: 1500 }}
    out:blur={{ duration: 1500 }}
    class="portrait"
    id="portrait_02"
    src="./media/kitty-06.jpg"
    alt="" />
{/if}
{#if showPhotos}
  <img
    in:portraitRotateIn={{ duration: 1500 }}
    out:blur={{ duration: 1500 }}
    class="portrait"
    id="portrait_03"
    src="./media/kitty-06.jpg"
    alt="" />
{/if}
