<script>
  import { fade, fly } from "svelte/transition";
  import {
    elasticOut,
    cubicIn,
    cubicOut,
    circIn,
    circOut
  } from "svelte/easing";
  let visible1 = true;
  let visible2 = true;
  let visible3 = true;
  let visible4 = true;
  let visible5 = true;
  let visible6 = true;
  let visible7 = true;
  let visible8 = false;
  let visible9 = false;
  let visible10 = false;
  let number = 5;
  let number2 = 5;
  let number3 = 5;
  let number4 = 5;
  let timer1 = null;
  let timer2 = null;
  let timer3 = null;
  let timer4 = null;
  let timer5 = null;
  let status = "waiting...";
  function startFading() {
    number = 5;
    timer1 = setInterval(() => {
      visible4 = !visible4;
      if (number !== 0) {
        number = visible4 ? number : number - 1;
      } else clearInterval(timer1);
    }, 1000);
  }
  function stopFading() {
    clearInterval(timer1);
  }
  function startFlying() {
    number2 = 5;
    timer2 = setInterval(() => {
      visible7 = !visible7;
      // number2 = number2 - 1;
      console.log(number2);
      if (number2 !== 0) {
        // number2 = number2 - 1;
        number2 = !visible7 ? number2 : number2 - 1;
      } else clearInterval(timer2);
    }, 1000);
  }
  function stopFlying() {
    clearInterval(timer2);
  }
  function appearScaleOut(node, { duration }) {
    return {
      duration,
      css: t => {
        const eased = circOut(t);

        return `
          transform: scale(${eased});
          opacity: ${eased};`;
        // return `
        //   transform: scale(${eased}) rotate(${eased * 1080}deg);
        //   opacity: ${eased};
        // 	color: hsl(
        // 		${~~(t * 360)},
        // 		${Math.min(100, 1000 - 1000 * t)}%,
        // 		${Math.min(50, 500 - 500 * t)}%
        // 	);`;
      }
    };
  }
  function fadeScaleOut(node, { duration }) {
    return {
      duration,
      css: (t, u) => {
        // u = 1-t
        const circEasedIn = circIn(t);
        const circEasedIn2 = circIn(u);
        const circEasedOut = circOut(t);
        const circGrowOut = circOut(u);
        const cubicEasedIn = cubicIn(t);
        const cubicEasedIn2 = cubicIn(u);
        const cubicEasedOut = cubicOut(t);
        const cubicGrowOut = cubicOut(u);
        const c = 8;
        return `
          transform: scale(${1 + c * circEasedIn2});
          opacity: ${cubicEasedOut};`;
      }
    };
  }
  function appearScaleIn(node, { duration }) {
    return {
      duration,
      css: (t, u) => {
        const eased = circOut(t);
        const c = 8;

        return `
          transform: scale(${1 * (c + 1 - c * eased)});
          opacity: ${eased};`;
      }
    };
  }
  function fadeScaleIn(node, { duration }) {
    return {
      duration,
      css: (t, u) => {
        // u = 1-t
        const easedIn = circIn(t);
        const easedIn2 = circIn(u);
        const easedOut = circOut(t);
        const growOut = circOut(u);
        return `
          transform: scale(${1 - growOut});
          opacity: ${easedIn};`;
      }
    };
  }
  function startShrinking() {
    number3 = 5;
    timer3 = setInterval(() => {
      visible8 = !visible8;
      if (number3 !== -1) {
        number3 = visible8 ? number3 : number3 - 1;
      } else {
        clearInterval(timer3);
        visible8 = false;
      }
    }, 500);
  }
  function stopShrinking() {
    clearInterval(timer3);
  }
  function startGrowing() {
    number4 = 5;
    timer4 = setInterval(() => {
      visible9 = !visible9;
      if (number4 !== -1) {
        number4 = visible9 ? number4 : number4 - 1;
      } else {
        clearInterval(timer4);
        visible9 = false;
      }
    }, 500);
  }
  function stopGrowing() {
    clearInterval(timer4);
  }
  function startPooing() {
    timer5 = setInterval(() => {
      visible10 = !visible10;
    }, 500);
  }
  function stopPooing() {
    visible10 = false;
    clearInterval(timer5);
  }
</script>

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 10em;
  }
</style>

<p>status1: {status}</p>
<label>
  <input type="checkbox" bind:checked={visible1} />
  visible1
</label>
<label>
  <input type="checkbox" bind:checked={visible2} />
  visible2
</label>
<label>
  <input type="checkbox" bind:checked={visible3} />
  visible3
</label>
<label>
  <input type="checkbox" bind:checked={visible5} />
  visible5
</label>
<label>
  <input type="checkbox" bind:checked={visible6} />
  visible6
</label>
<label>
  <input type="checkbox" bind:checked={visible8} />
  visible8
</label>
<button on:click={startFading}>StartFade</button>
<button on:click={stopFading}>StopFade</button>
<button on:click={startFlying}>StartFly</button>
<button on:click={stopFlying}>StopFly</button>
<button on:click={startShrinking}>Start Count</button>
<button on:click={stopShrinking}>Stop Count</button>
<button on:click={startGrowing}>Start Grow</button>
<button on:click={stopGrowing}>Stop Grow</button>
<button on:click={startPooing}>Start Poo</button>
<button on:click={stopPooing}>Stop Poo</button>
{#if visible1}
  <p
    transition:fade
    on:introstart={() => (status = 'intro started')}
    on:outrostart={() => (status = 'outro started')}
    on:introend={() => (status = 'intro ended')}
    on:outroend={() => (status = 'outro ended')}>
    Fades in and out.
  </p>
{/if}
{#if visible2}
  <p transition:fly={{ y: 200, duration: 1000 }}>Flies in and out.</p>
{/if}
{#if visible3}
  <p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
{/if}
{#if visible5}
  <p transition:fly={{ x: 100, duration: 1000 }}>
    Flies in and out horizontally.
  </p>
{/if}
{#if visible6}
  <p in:fly={{ x: 100, duration: 1000 }} out:fly={{ x: -100, duration: 1000 }}>
    Flies through horizontally.
  </p>
{/if}
{#if visible4}
  <p transition:fade style="transform: scale(2)">{number}</p>
{:else}
  <p />
{/if}
{#if visible7}
  <p in:fly={{ x: 80, duration: 500 }} out:fly={{ x: -80, duration: 500 }}>
    {number2}
  </p>
{:else}
  <p />
{/if}
{#if visible8}
  <div
    class="centered"
    in:appearScaleIn={{ duration: 500 }}
    out:fadeScaleIn={{ duration: 500 }}>
    <span>{number3}</span>
  </div>
{/if}
{#if visible9}
  <div
    class="centered"
    in:appearScaleOut={{ duration: 500 }}
    out:fadeScaleOut={{ duration: 500 }}>
    <span>{number4}</span>
  </div>
{/if}
{#if visible10}
  <div
    class="centered"
    in:appearScaleOut={{ duration: 500 }}
    out:fadeScaleOut={{ duration: 500 }}>
    <span>💩</span>
  </div>
{/if}
