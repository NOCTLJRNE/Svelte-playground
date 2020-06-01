<script>
  //   import HAPPY_UpSandyBrown from "../svg/HAPPY_UpSandyBrown.svelte";
  import HAPPY_UpSandyBrown_Center from "../svg/HAPPY_UpSandyBrown_Center.svelte";
  import BIRTHDAY_UpSandyBrown from "../svg/BIRTHDAY_UpSandyBrown.svelte";
  import { onMount, onDestroy } from "svelte";
  const emojisSelection = ["🎁", "🍀", "🎂", "💰", "🏘️", "🚗", "🗼", "❤️"];
  const emojisCount = 48;
  let startHAPPY = false;
  let startBIRTHDAY = false;
  let emojisArray = new Array(emojisCount).fill().map((_, i) => {
    return {
      character: emojisSelection[i % emojisSelection.length],
      x: Math.random() * 100,
      y: -20 - Math.random() * 100,
      r: 0.2 + Math.random() * (0.7 - 0.2),
      z: i % 2 ? 1000 : -1000
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

    // function loop() {
    //   frame = requestAnimationFrame(loop);

    //   emojisArray = emojisArray.map((emoji, i) => {
    //     emoji.y += (emojisFallRate / 10) * emoji.r;
    //     // if (emoji.y > 120) emoji.y = -20;
    //     if (emoji.y > 120 && !rainStopped) emoji.y = -20;
    //     if (emoji.x > 120 && !rainStopped) emoji.x = -10;
    //     if (emoji.x < -20 && !rainStopped) emoji.x = -110;
    //     let c = i % 2 ? 1 : -1;
    //     if (sway) {
    //       let dx = c * Math.cos(0.1 * emoji.y);

    //       emoji.x += dx * emoji.r * 0.25;
    //     }
    //     if (oscillateSpeed) {
    //       // let temp = emoji.r;
    //       // let temp2 = (0.3 * emoji.y) / temp;
    //       emoji.t = 0.25 * Math.cos(0.4 * emoji.y);
    //     }
    //     if (windSpeed != 0) {
    //       emoji.x += (emoji.r * windSpeed) / 10;
    //     }
    //     // emoji rev rate
    //     if (emojisRevRate != 0) {
    //       emoji.t = (emojisRevRate * 0.5 * emoji.y) / 100;
    //     }
    //     // if (emoji.x > 120) emoji.x = -20;
    //     return emoji;
    //   });
    // }

    loop();

    return () => cancelAnimationFrame(frame);
  });
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
<BIRTHDAY_UpSandyBrown {startBIRTHDAY} />
