<script>
  import { link } from "svelte-spa-router";
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
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
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
  /* #gradientEllipse {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vh;
    height: 30vh;
    position: absolute;
    bottom: 6vh;
    background: radial-gradient(
      ellipse closest-side,
      #ff9900,
      #ff99003b 70%,
      rgb(10, 10, 10) 100%
    );
  } */
  @keyframes blinkIt {
    50% {
      opacity: 0.8;
    }
  }
</style>

<div class="rootContainer">
  <h1 id="h2-01">
    <a href="/" use:link>Back to 🏠🏠🏠</a>
  </h1>
  <p>Glowing in the darkness ...</p>
  <div id="flex-container">

    <div class="blinking-glow" />

    <img id="img01" src="./media/cakes/03.png" alt="" />
    <!-- <div id="gradientEllipse">
      <p>🕯️🕯️🕯️</p>
    </div> -->
  </div>

</div>
