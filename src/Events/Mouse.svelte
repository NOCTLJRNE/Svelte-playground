<script>
  let m = { x: 0, y: 0 };
  function mouseHandler(e) {
    m.x = e.clientX;
    m.y = e.clientY;
  }
</script>

<style>
  #pad {
    height: 400px;
    border: 1.5px solid #ff3e00;
  }
</style>

<div id="pad" on:mousemove={mouseHandler}>
  <!-- <div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}"></div> -->
  The mouse position is {m.x} x {m.y}
</div>
