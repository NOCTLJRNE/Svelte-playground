<script>
  import { onMount } from "svelte";
  let selectorVisible = true;
  let emojis = ["❄️"];
  let characters = ["🥳", "🎉", "✨", "🎂", "🎁", "💰", "💩", "❄️"];
  // let characters = ["❄️"];
  let sway = false;
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
  $: confetti = new Array(50)
    .fill()
    .map((_, i) => {
      return {
        // character: characters[i % characters.length],
        character: emojis[i % emojis.length],
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        r: 0.1 + Math.random(0.7) * 1
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

    function loop() {
      frame = requestAnimationFrame(loop);

      confetti = confetti.map((emoji, i) => {
        emoji.y += 0.6 * emoji.r;
        if (emoji.y > 120) emoji.y = -20;
        let c = i % 2 ? 1 : -1;
        if (sway) {
          let dx = c * Math.cos(0.1 * emoji.y);

          emoji.x += dx * emoji.r * 0.25;
        }
        if (emoji.x > 120) emoji.x = -20;
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
    confetti = new Array(50)
      .fill()
      .map((_, i) => {
        return {
          character: emojis[i % emojis.length],
          x: Math.random() * 100,
          y: -20 - Math.random() * 100,
          r: 0.1 + Math.random(0.7) * 1
        };
      })
      .sort((a, b) => a.r - b.r);
  }
  function toggleSelector() {
    selectorVisible = !selectorVisible;
  }
  function emojiClickHandler(i) {
    console.log(`emoji ${i} clicked`);
    sound01.play();
    confetti[i].character = "💩";
  }
</script>

<style>
  /* :global(body) {
    overflow: hidden;
  } */
  .emojiInput {
    margin: 1vh 0vw 1vh 2vw;
  }
  .emojiDroplet {
    position: absolute;
    font-size: 5vw;
    cursor: grab;
  }
</style>

<button on:click={toggleSelector}>
  {selectorVisible ? 'Hide' : 'Show'} Emojis Selector
</button>
<br />
{#if selectorVisible}
  {#each characters as emoji}
    <input
      class="emojiInput"
      type="checkbox"
      bind:group={emojis}
      value={emoji} />
    {emoji}
  {/each}
{/if}
<br />
<button on:click={toggleIcons}>Toggle Icons</button>
<button on:click={() => (sway = !sway)}>Toggle The Wind !</button>
{#each confetti as c, i}
  <span
    on:click={() => emojiClickHandler(i)}
    class="emojiDroplet"
    style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
    {c.character}
  </span>
{/each}
<audio bind:this={sound01} src="./p-ping.mp3" />
