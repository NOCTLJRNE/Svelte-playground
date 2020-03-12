<script>
  let a = 1;
  let b = 2;
</script>

<style>
  #adder {
    border: 1.5px solid #0dfbe8;
    margin-bottom: 2px;
  }
</style>

<div id="adder">
  <label>
    <input type="number" bind:value={a} min="0" max="10" />
    <input type="range" bind:value={a} min="0" max="10" />
  </label>

  <label>
    <input type="number" bind:value={b} min="0" max="10" />
    <input type="range" bind:value={b} min="0" max="10" />
  </label>

  <p>{a} + {b} = {a + b}</p>
</div>
