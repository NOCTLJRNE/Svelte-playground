<script>
  import TTTVcaps from "../svg/TTTVcaps.svelte";
  import Space from "../svg/Space.svelte";
  import Dash from "../svg/Dash.svelte";
  import V from "../svg/V.svelte";
  import Ymin from "../svg/Ymin.svelte";
  import Tmaj from "../svg/Tmaj.svelte";
  import UWmin from "../svg/UWmin.svelte";
  import OWFmin from "../svg/OWFmin.svelte";
  import Nmin from "../svg/Nmin.svelte";
  import Gmin from "../svg/Gmin.svelte";
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
<br />
<br />
{#if visible1}
  <!-- <TTTVcaps /> -->
  <Tmaj />
  <UWmin />
  <OWFmin />
  <Nmin />
  <Gmin />
  <Dash />
  <V />
  <Ymin />
{/if}
<div id="div2">
  <Tmaj />
  <UWmin />
  <OWFmin />
  <Nmin />
  <Gmin />
  <Dash />
  <V bind:strokeColor={blue} bind:strokeWidth />
  <Ymin />
</div>
