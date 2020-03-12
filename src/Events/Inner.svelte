<script>
  import { createEventDispatcher } from "svelte";
  const distpatch = createEventDispatcher();
  function sayHello() {
    distpatch("message", {
      text: "🎉 Event triggered !"
    });
  }
</script>

<button on:click={sayHello}>Click to trigger the event</button>
