<script>
  let counter = 0;
  let numbers = [1, 2, 3, 4];
  $: doubled = counter * 2;
  $: sum = numbers.reduce(reducer);
  $: {
    console.log(`counter is ${counter}`);
    console.log(`doubled is ${doubled}`);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  function clickHandler() {
    counter += 1;
  }
  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }
</script>

<button on:click={clickHandler}>
  Click {counter} {counter == 1 ? 'time' : 'times'}
</button>
<p>{counter} doubled is {doubled}</p>
<button on:click={addNumber}>Add a number</button>
<p>{numbers.join(' + ')} = {sum}</p>
