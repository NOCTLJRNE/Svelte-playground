<script>
  import { onMount } from "svelte";

  // let characters = ["🥳", "🎉", "✨", "🎂", "🎁", "💰"];
  let characters = ["❄️"];
  let sway = false;
  // let confetti = new Array(100)
  let confetti = new Array(50)
    .fill()
    .map((_, i) => {
      return {
        character: characters[i % characters.length],
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
    console.log(characters);
    characters =
      JSON.stringify(characters) == JSON.stringify(["❄️"])
        ? ["🥳", "🎉", "✨", "🎂", "🎁", "💰", "💩"]
        : ["❄️"];
    console.log(characters);
    confetti = new Array(50)
      .fill()
      .map((_, i) => {
        return {
          character: characters[i % characters.length],
          x: Math.random() * 100,
          y: -20 - Math.random() * 100,
          r: 0.1 + Math.random(0.7) * 1
        };
      })
      .sort((a, b) => a.r - b.r);
  }
</script>

<style>
  /* :global(body) {
    overflow: hidden;
  } */

  span {
    position: absolute;
    font-size: 5vw;
  }
</style>

<button on:click={toggleIcons}>Toggle Icons</button>
<button on:click={() => (sway = !sway)}>Toggle The Wind !</button>
{#each confetti as c}
  <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
    {c.character}
  </span>
{/each}
