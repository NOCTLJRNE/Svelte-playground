<script>
  import { push, pop, replace, link } from "svelte-spa-router";
</script>

<style>
  #rootContainerIndex {
    height: 100%;
    background: rgb(41, 41, 41);
  }
  #h2-01 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 100;
  }
</style>

<div id="rootContainerIndex">
  <h2 id="h2-01">
    <a href="/congrats" use:link>Let it 🌧️🌧️🌧️ !</a>
    <br />
    <a href="/fonts" use:link>Check some 🔤 !</a>
    <br />
    <a href="/glowing" use:link>Glow 🔤 !</a>
    <br />
    <a href="/gradient" use:link>Radiance !</a>
    <br />
    <a href="/airdrop" use:link>Drop the 🎁 !</a>
    <br />
    <a href="/dance" use:link>Let's party 🎉!</a>
    <br />
    <a href="/scene2" use:link>🎞️ Scene 2! 🎞️!</a>
    <br />
    <a href="/scene3" use:link>🎞️ Scene 3! 🎞️!</a>
    <br />
    <a href="/scene4" use:link>🎞️ Scene 4! 🎞️!</a>
    <br />
    <a href="/scene5" use:link>🎞️ Scene 5! 🎞️!</a>
    <br />
    <a href="/birthday" use:link>🎂🎁🍰🎉</a>
  </h2>
</div>
