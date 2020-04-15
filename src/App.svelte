<script>
  import CounterIntro from "./Introduction/Counter.svelte";
  import Nested from "./Nested.svelte";
  import Thing from "./Thing.svelte";
  import Inner from "./Events/Inner.svelte";
  import Outer from "./Events/Outer.svelte";
  import Mouse from "./Events/Mouse.svelte";
  import CustomButton from "./Events/CustomButton.svelte";
  import Adder from "./Adder.svelte";
  import Await from "./Logic/Await.svelte";
  import IfElse from "./Logic/IfElse.svelte";
  import Each from "./Logic/Each.svelte";
  import GroupInputs from "./Bindings/GroupInputs.svelte";
  import SelectBindings from "./Bindings/SelectBindings.svelte";
  import ThisBinding from "./Bindings/ThisBinding.svelte";
  import Keypad from "./Bindings/Keypad.svelte";
  import { count, time, elapsed, words, greetings } from "./store.js";
  import Incrementer from "./Stores/Incrementer.svelte";
  import Decrementer from "./Stores/Decrementer.svelte";
  import Resetter from "./Stores/Resetter.svelte";
  import Counter from "./Stores/Counter.svelte";
  import Tweened from "./Motion/Tweened.svelte";
  import Spring from "./Motion/Spring.svelte";
  import FadeAndFly from "./Transitions/FadeAndFly.svelte";
  import CustomSpinCSS from "./Transitions/CustomSpinCSS.svelte";
  import TypeWriter from "./Transitions/TypeWriter.svelte";
  import DeferredTransitions from "./Transitions/DeferredTransitions.svelte";
  import ClassDirective from "./Classes/ClassDirective.svelte";
  import SlotBox from "./ComponentComposition/SlotBox.svelte";
  import NamedSLotContactCard from "./ComponentComposition/NamedSlotContactCard.svelte";
  // import NamedSLotContactCard from "./ComponentComposition/NamedSLotContactCard.svelte";
  import SlotProps from "./ComponentComposition/SlotProps.svelte";
  import Self from "./SpecialElements/Self.svelte";
  import DynamicComponent from "./SpecialElements/DynamicComponent.svelte";
  import Window from "./SpecialElements/Window.svelte";
  import CongratsWindows from "./CongratsWindows.svelte";
  // import Congrats from "./Congrats.svelte";
  import Router from "svelte-spa-router";
  import { onDestroy } from "svelte";
  import { link } from "svelte-spa-router";
  export let name;
  const routes = {
    "/congrats": CongratsWindows
  };
  let word = "world";
  let innerEventMessage = "Inner event starting ...";
  let outerEventMessage = "Outer event starting ...";

  let things = [
    { id: 1, color: "#0d0887" },
    { id: 2, color: "#6a00a8" },
    { id: 3, color: "#b12a90" },
    { id: 4, color: "#e16462" },
    { id: 5, color: "#fca636" }
  ];
  //Keypad
  let pin;
  let count_value;
  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });
  const unsubscribe = count.subscribe(value => {
    count_value = value;
  });

  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : "enter your pin";

  function handleSubmit() {
    alert(`submitted ${pin}`);
  }
  //Keypad
  function clickHandler() {
    alert("Custom button clicked !");
  }
  function removeHandler() {
    things = things.slice(1);
  }
  function innerMessageHandler(mess) {
    // console.log(mess.detail.text);
    innerEventMessage = mess.detail.text;
  }
  function outerMessageHandler(mess) {
    // console.log(mess.detail.text);
    outerEventMessage = mess.detail.text;
  }

  //DOM events

  //DOM events
  onDestroy(unsubscribe);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  div {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }
  .active {
    background-color: #ff3e00;
    color: white;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps !!!
  </p>
  <p>
    <a href="/congrats" use:link>Let the party begin !</a>
  </p>

  <Router {routes} />

  <CounterIntro />
  <!-- Props  -->
  <Nested answer={261} />
  <Nested />
  <!-- Logic -->
  <IfElse />
  <Each />
  <button on:click={removeHandler}>Remove first thing</button>
  {#each things as thing (thing.id)}
    <Thing current={thing.color} />
  {/each}
  <Await />
  <!-- Logic -->
  <!-- Events -->
  <Inner on:message={innerMessageHandler} />

  <p>{innerEventMessage}</p>
  <Outer on:message={outerMessageHandler} />
  <p>{outerEventMessage}</p>
  <CustomButton on:click={clickHandler} />
  <!-- Events -->
  <input type="text" bind:value={word} />
  <p>2 ways binding, Hello {word}</p>
  <Adder />
  <GroupInputs />
  <SelectBindings />
  <!-- <ThisBinding style="height: 200px" /> -->
  <h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
  <Keypad bind:value={pin} on:submit={handleSubmit} />
  <!-- Stores -->
  <h2>The count is {count_value}</h2>
  <h2>The $count is {$count}</h2>
  <Incrementer />
  <Decrementer />
  <Resetter />
  <h2>The time is {formatter.format($time)}</h2>
  <p>
    This page has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
  </p>
  <Counter />
  <h2>{$greetings}</h2>
  <input type="text" bind:value={$words} />
  <!-- Stores -->
  <!-- Motion -->
  <Tweened />
  <Spring />
  <!-- Motion -->
  <!-- Transitons -->
  <FadeAndFly />
  <!-- <CustomSpinCSS /> -->
  <TypeWriter />
  <DeferredTransitions />
  <!-- Transitons -->
  <!-- Classes -->
  <ClassDirective />
  <!-- Classes -->
  <!-- ComponentComposition -->
  <SlotBox>
    <h2>Hello</h2>
    <p>This is a box. It can contain anything</p>
  </SlotBox>
  <SlotBox />
  <NamedSLotContactCard>
    <span slot="name">Zhao Yun</span>
    <span slot="address">Shu country</span>
  </NamedSLotContactCard>
  <SlotProps let:hovering>
    <div id="hoverme" class:active={hovering}>
      {#if hovering}
        <p>I am being hovered upon.</p>
      {:else}
        <p>Hover over me!</p>
      {/if}
    </div>
  </SlotProps>
  <!-- ComponentComposition -->

  <!-- <Mouse /> -->

</main>
<!-- Special Elements -->
<!-- <Self />
<DynamicComponent />
<Window /> -->
<!-- Special Elements -->
<!-- <Congrats /> -->
