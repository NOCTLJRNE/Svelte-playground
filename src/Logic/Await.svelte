<script>
  let promise1 = getRandomNumber1();
  let promise2 = new Promise((resolve, reject) => {});
  async function getRandomNumber1() {
    const res = await fetch("https://svelte.dev/tutorial/random-number");
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }
  function getRandomNumber2() {
    promise2 = new Promise(function(resolve, reject) {
      fetch("https://svelte.dev/tutorial/random-number")
        .then(response => {
          response.text().then(text => {
            if (response.ok) {
              resolve(text);
            } else {
              let err = new Error(text);
              reject(err);
            }
          });
        })
        .catch(error => {
          reject(error);
        });
    });
    return promise2;
  }
  function handleClick() {
    promise1 = getRandomNumber1();
  }
</script>

<button on:click={handleClick}>generate random number</button>
<button on:click={getRandomNumber2}>raffle</button>
<!-- replace this element -->
{#await promise1}
  <p>...waiting 1st promise</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
{#await promise2}
  <p>...waiting 2nd promise</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
