<script>
  import { onMount } from "svelte";
  import { link } from "svelte-spa-router";
  let radiance = {
    centerColor: "#ff9900",
    edgeColor: "#ff99003b",
    edgePercent: 70,
    edgeOpacity: 0.23,
    blackPercent: 97
  };
  let c = 0;
  onMount(() => {
    let frame;
    function loop() {
      frame = requestAnimationFrame(loop);
      if (radiance.blackPercent <= 97) {
        c = 1;
      } else if (radiance.blackPercent >= 100) {
        c = -1;
      }
      radiance.blackPercent = radiance.blackPercent + 0.1 * c;
      radiance.edgePercent = radiance.edgePercent - 0.1 * c;
      radiance.edgeOpacity = radiance.edgeOpacity - 0.1 * c * 0.01;
      //   console.log("Radiance:", radiance.blackPercent);
    }
    loop();
    return () => cancelAnimationFrame(frame);
  });
</script>

<style>
  .rootContainer {
    height: 100vh;
    background: rgb(10, 10, 10);
  }
  #flex-container {
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  #img01 {
    height: 25vh;
    width: auto;
    position: absolute;
    top: 35vh;
  }
  .rootContainer {
    width: 100%;
  }
  .holder {
    margin: 12rem auto 0;
    width: 150px;
    height: 400px;
    position: relative;
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
    animation: blinkIt 1s infinite;
  }
  #gradientEllipse1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vh;
    height: 30vh;
    position: absolute;
    bottom: 6vh;
    background: radial-gradient(
      ellipse closest-side,
      rgba(255, 153, 0, 1),
      rgba(255, 153, 0, 0.231) 70%,
      rgb(10, 10, 10) 97%
    );
    /* animation: moveIt3 2s linear infinite; */
  }
  #gradientEllipse2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vh;
    height: 30vh;
    position: absolute;
    bottom: 37vh;
    background: radial-gradient(
      ellipse closest-side,
      rgba(255, 145, 0, 1),
      rgba(255, 153, 0, 0.2) 66%,
      rgb(10, 10, 10) 100%
    );
  }
  #gradientEllipse3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vh;
    height: 30vh;
    position: absolute;
    bottom: 68vh;
    background: radial-gradient(
      ellipse closest-side,
      rgba(255, 153, 0, 1),
      rgba(255, 153, 0, 0.23) 70%,
      rgb(10, 10, 10) 97%
    );
  }
  @keyframes blinkIt {
    50% {
      opacity: 0.8;
    }
  }
  @keyframes blinkIt1 {
    50% {
      opacity: 0.7;
    }
  }
  @keyframes blinkIt3 {
    50% {
      /* opacity: 0.7; */
      background: radial-gradient(
        ellipse closest-side,
        #ff9900,
        #ff99003b 70%,
        rgb(10, 10, 10) 100%
      );
    }
  }
  @keyframes moveIt3 {
    50% {
      /* opacity: 0.7; */
      bottom: 1vh;
    }
  }
</style>

<div class="rootContainer">
  <h1 id="h2-01">
    <a href="/" use:link>Back to 🏠🏠🏠</a>
  </h1>
  <p>Radiance in the darkness ...</p>
  <div id="flex-container">

    <!-- <div class="blinking-glow" /> -->

    <!-- <img id="img01" src="./media/cakes/03.png" alt="" /> -->
    <div id="gradientEllipse1">
      <p>🕯️🕯️🕯️</p>
    </div>
    <div id="gradientEllipse2">
      <p>🕯️🕯️🕯️</p>
    </div>
    <div
      id="gradientEllipse3"
      style="background: radial-gradient(ellipse closest-side, rgba(255, 153, 0,
      1), rgba(255, 153, 0, {radiance.edgeOpacity}) {radiance.edgePercent}%,
      rgb(10, 10, 10) {radiance.blackPercent}%)">
      <p>🕯️🕯️🕯️</p>
    </div>
  </div>

</div>
