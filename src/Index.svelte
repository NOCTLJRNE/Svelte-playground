<script>
  import { push, pop, replace, link } from "svelte-spa-router";
</script>

<style>
  #h2-01 {
    color: #ff3e00;
    text-transform: uppercase;
    font-weight: 100;
  }
</style>

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
</h2>
