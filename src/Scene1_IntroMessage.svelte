<script>
  import { link } from "svelte-spa-router";
  import { onMount } from "svelte";
  import { blur, draw, fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  const speedFactor = 4;
  const dispatch = createEventDispatcher();
  //   const message1 = "Tặng chef nhân dịp sinh nhật";
  const message1 = "Tặng chef !";
  //   const message2 = "lần thứ 3";
  const message2 = "nhân dịp sinh nhật lần thứ 3";
  //   const message3 = "lần thứ 3 ...";
  const message3 = "nhân dịp sinh nhật lần thứ 3 ...";
  const message4 = "Enjoy !";
  const message5 = "... Or not ...";
  let visible1 = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let visible5 = false;
  let ending1 = true;
  function scene1Ended() {
    dispatch("scene1Ended", { message: "scene1 has ended !" });
  }
  function typing(node, { speed, delay }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE; //check if the node only has 1 child & it is a purely text

    if (!valid) {
      // throw a error otherwise
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent; // get the text
    const duration = (text.length * speed) / speedFactor; // set the duration based on tetx length
    // const delay = 500;

    return {
      delay,
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function deleting(node, { delay, speed }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE; //check if the node only has 1 child & it is a purely text

    if (!valid) {
      // throw a error otherwise
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent; // get the text
    const duration = (text.length * speed) / speedFactor; // set the duration based on tetx length

    return {
      delay,
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t);

        node.textContent = text.slice(0, i);
      }
    };
  }
  function intro1endLog() {
    console.log("end typing 1");
  }
  function intro2End() {
    // console.log("outro2end");
    setTimeout(() => {
      visible1 = false;
      visible2 = false;
      visible3 = true;
    }, 800);
    setTimeout(() => {
      visible3 = false;
    }, 1000);
  }
</script>

<style>
  #message1 {
    margin-top: 20vh;
    font-family: "Sriracha", serif;
    font-size: 8vh;
    color: sandybrown;
  }
</style>

{#if ending1}
  <h3
    id="message1"
    out:blur={{ delay: 1500, duration: 2000 }}
    on:outroend={scene1Ended}>
    <span
      in:typing={{ speed: 80, delay: 500 }}
      on:introend={() => {
        visible1 = true;
      }}>
      {message1}
    </span>
    <br />
    {#if visible1}
      <span
        in:typing={{ speed: 80, delay: 800 }}
        on:introend={() => {
          visible2 = true;
        }}>
        {message2}
      </span>
    {/if}
    {#if visible2}
      <span in:typing={{ speed: 800, delay: 100 }} on:introend={intro2End}>
        ...
      </span>
    {/if}
    {#if visible3}
      <span
        out:deleting={{ speed: 25, delay: 400 }}
        on:outroend={() => {
          visible4 = true;
        }}>
        {message3}
      </span>
    {/if}
    {#if visible4}
      <span in:typing={{ speed: 80, delay: 500 }}>😛</span>
      <br />
      <span
        in:typing={{ speed: 80, delay: 500 }}
        on:introend={() => {
          visible5 = true;
        }}>
        {message4}
      </span>
    {/if}
    {#if visible5}
      <span
        in:typing={{ speed: 80, delay: 500 }}
        on:introend={() => {
          ending1 = false;
        }}>
        {message5}
      </span>
    {/if}
  </h3>
{/if}
