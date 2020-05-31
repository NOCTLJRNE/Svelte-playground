<script>
  // import TTTVcaps from "../svg/TTTVcaps.svelte";
  import HappyBirthday from "../svg/HappyBirthday.svelte";
  import HaBi from "../svg/HaBi.svelte";
  import Ha_Bi_SandyBrown from "../svg/Ha_Bi_SandyBrown.svelte";
  import HAPPY_UpSandyBrown from "../svg/HAPPY_UpSandyBrown.svelte";
  import H_SandyBrown from "../svg/H_SandyBrown.svelte";
  import A_SandyBrown from "../svg/A_SandyBrown.svelte";
  import A_UpSandyBrown from "../svg/A_UpSandyBrown.svelte";
  import P_UpSandyBrown from "../svg/P_UpSandyBrown.svelte";
  import Y_UpSandyBrown from "../svg/Y_UpSandyBrown.svelte";
  import I_SandyBrown from "../svg/I_SandyBrown.svelte";
  import Kitty from "../svg/Kitty.svelte";

  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import { linear } from "svelte/easing";
  //   let fontsFamily = [
  //     "'Aguafina Script', cursive",
  //     "'Aladin', cursive",
  //     "'Alex Brush', cursive",
  //     "'Allura', cursive",
  //     "'Bad Script', cursive",
  //     "'Berkshire Swash', cursive",
  //     "'Bilbo', cursive",
  //     "'Arizonia', cursive",
  //     "'Caveat', cursive",
  //     "'Caveat Brush', cursive",
  //     "'Charm', cursive",
  //     "'Courgette', cursive",
  //     "'Dancing Script', cursive",
  //     "'Devonshire', cursive",
  //     "'Felipa', cursive",
  //     "'Just Another Hand', cursive",
  //     "'Kalam', cursive",
  //     "'Kaushan Script', cursive",
  //     "'League Script', cursive",
  //     "'Marck Script', cursive",
  //     "'Merienda One', cursive",
  //     "'Nanum Brush Script', cursive",
  //     "'Nanum Pen Script', cursive",
  //     "'Nothing You Could Do', cursive",
  //     "'Rancho', cursive",
  //     "'Sedgwick Ave', cursive",
  //     "'Shadows Into Light Two', cursive",
  //     "'Sriracha', cursive",
  //     "'Tangerine', cursive"
  //   ];
  let blue = "#0000FF";
  let strokeWidth = 1;
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let fontsFamily = ["'Sriracha', cursive"];
  let fontsList = fontsFamily.map((font, i) => ({ number: i + 1, font }));
  onMount(() => {
    console.log(fontsList);
  });
</script>

<style>
  .element1 {
    font-family: "Tangerine";
    font-size: 5vh;
    display: inline-block;
    margin: auto 1vw auto 1vw;
  }
  .element2 {
    font-size: 5vh;
    display: inline-block;
    margin: auto 1vw auto 1vw;
  }
  #div2 {
    height: 50%;
  }
</style>

<h1 id="h2-01">
  <a href="/" use:link>Back to 🏠🏠🏠</a>
</h1>
<!-- <ol class="list1">
  {#each fontsList as font, i}
    <li class="element1">{i + 1}. ABCDEF abcdef</li>
  {/each}
</ol> -->
<ol class="list2">
  {#each fontsList as font, i}
    <li class="element2" style="font-family: {font.font}">
      {font.number}. ABCD abcd 123!
    </li>
  {/each}
</ol>
<button on:click={() => (visible1 = !visible1)}>
  {visible1 ? 'Erase' : 'Draw'}
</button>
<button on:click={() => (visible2 = !visible2)}>
  {visible2 ? 'Erase BD' : 'Draw BD'}
</button>
<button on:click={() => (visible3 = !visible3)}>
  {visible3 ? 'Erase O' : 'Draw O'}
</button>
<button on:click={() => (visible4 = !visible4)}>
  {visible4 ? 'Erase Kitty' : 'Draw Kitty'}
</button>
<!-- <button on:click={() => (visible4 = !visible4)}>
  {visible4 ? 'Erase HaBi' : 'Draw HaBi'}
</button> -->
<br />
<br />
<!-- {#if visible1}


{/if} -->
<div id="div2">

  <br />
  {#if visible3}
    <!-- <O2maj /> -->
    <br />
    <!-- <O1maj /> -->
  {/if}
  <br />
  {#if visible2}
    <!-- <HappyBirthday /> -->
    <!-- <Omaj /> -->
    <!-- <O2maj2 /> -->
    <!-- <Lmaj /> -->
  {/if}
  <!-- <HaBi /> -->
  <HAPPY_UpSandyBrown />
  <!-- <H_SandyBrown /> -->
  <!-- <A_SandyBrown /> -->
  <!-- <A_UpSandyBrown /> -->
  <!-- <P_UpSandyBrown /> -->
  <!-- <Y_UpSandyBrown /> -->
  <!-- <I_SandyBrown /> -->
  <!-- <Ha_Bi_SandyBrown /> -->
  {#if visible4}
    <Kitty />
  {/if}

</div>
