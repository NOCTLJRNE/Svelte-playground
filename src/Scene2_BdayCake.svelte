<script>
  import { blur, draw, fade, fly } from "svelte/transition";
  import { cubicIn, cubicOut, circIn, circOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";
  export let scene2Start = false;
  const dispatch = createEventDispatcher();
  function scene2Ended() {
    dispatch("scene2Ended", { message: "scene2 has ended !" });
  }
  function startCountDown(delay) {
    setTimeout(() => {
      scene2Start = false;
      // console.log("Timed Out");
    }, delay);
  }
</script>

<style>
  /* .stickerClass {
    position: absolute;
  } */
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  #stickerContainer {
    display: flex;
    justify-content: center;
    margin-top: 35%;
  }
  #img01 {
    height: 25vh;
    width: auto;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 35vh;
  }
  #scticker01 {
    transform: scale(0.75);
    /* top: 80%;
    left: 10%; */
  }
  #scticker02 {
    transform: scale(0.75);
    /* top: 80%;
    left: 80%; */
  }
  #spacer {
    width: 900px;
  }
  .blinking-glow {
    width: 36vh;
    height: 30vh;
    /* left: 50%;
    top: -55%; */
    position: absolute;
    top: 20vh;
    transform: translateX(0%);
    border-radius: 30vh;
    background: #ff9900;
    filter: blur(70px);
    animation: blinkIt 1.35s infinite;
  }

  @keyframes blinkIt {
    50% {
      opacity: 0.8;
    }
  }
</style>

<div id="flex-container">

  {#if scene2Start}
    <div
      class="blinking-glow"
      in:blur={{ delay: 1000, duration: 2000 }}
      out:blur={{ delay: 0, duration: 2000 }} />
    <img
      in:blur={{ delay: 1000, duration: 2000 }}
      out:blur={{ delay: 0, duration: 2000 }}
      on:outroend={scene2Ended}
      id="img01"
      src="./media/cakes/03.png"
      alt="" />
  {/if}
  <div id="stickerContainer">
    {#if scene2Start}
      <img
        class="stickerClass"
        id="scticker01"
        src="./media/usagyuuun/humming.gif"
        alt=""
        in:fly={{ delay: 500, duration: 1000, x: -100, easing: cubicOut }}
        out:blur={{ delay: 0, duration: 2000 }} />
    {/if}
    <span id="spacer" />
    {#if scene2Start}
      <img
        class="stickerClass"
        id="scticker02"
        src="./media/usagyuuun/humming.gif"
        alt=""
        in:fly={{ delay: 2000, duration: 1000, x: 100, easing: cubicOut }}
        out:blur={{ delay: 0, duration: 2000 }}
        on:introend={() => startCountDown(4000)} />
    {/if}
  </div>
</div>
