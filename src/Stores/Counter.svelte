<script>
  import { count2 } from "../store.js";
</script>

<h2>The custom store count is {$count2}</h2>
<button on:click={count2.increment}>+</button>
<button on:click={count2.decrement}>-</button>
<button on:click={count2.reset}>Reset</button>
