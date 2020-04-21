<script>
  let visible = false;
  let visible2 = false;
  let visible3 = false;
  let visible4 = false;
  let visible5 = false;
  let visible6 = true;
  let outro1Ended = false;
  let intro2Ended = false;
  let outro3Ended = false;
  // const removedCharacters = 6;
  function typewriter1(node, { speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length

    return {
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function typedeleter1(node, { speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length

    return {
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function typewriter2(node, { speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length
    return {
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function typedeleter2(node, { speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length

    return {
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function typewriter3(node, { speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length
    const delay = 500;

    return {
      delay,
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function typedeleter3(node, { delay, speed = 50, removedCharacters }) {
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
    const duration = text.length * speed; // set the duration based on tetx length

    return {
      delay,
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t);
        if (i >= text.length - removedCharacters) {
          node.textContent = text.slice(0, i);
        }
      }
    };
  }
  function typewriter4(node, { delay, speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length

    return {
      delay,
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t); // as the tick increment from 0 -> 1, increment from 0 to text.length, ~~ is afaster Math.floor
        node.textContent = text.slice(0, i); // slice the text based on i value
      }
    };
  }
  function typedeleter4(node, { delay, speed = 50 }) {
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
    const duration = text.length * speed; // set the duration based on tetx length

    return {
      delay,
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t);

        node.textContent = text.slice(0, i);
      }
    };
  }

  function intro1startLog() {
    outro1Ended = false;
    console.log("intro1start Log !");
  }
  function outro1startLog() {
    console.log("outro1start Log !");
  }
  function intro1endLog() {
    console.log("intro1end Log !");
    visible3 = false;
  }
  function outro1endLog() {
    outro1Ended = true;
    visible4 = true;
    console.log("outro1end Log !");
  }
  function intro2startLog() {
    console.log("intro2start Log !");
  }
  function outro2startLog() {
    console.log("outro2start Log !");
  }
  function intro2endLog() {
    intro2Ended = true;
    setTimeout(() => {
      visible6 = false;
    }, 200);
    console.log("intro2end Log !");
  }
  function outro2endLog() {
    console.log("outro2end Log !");
  }
  function intro3startLog() {
    console.log("intro3start Log !");
  }
  function outro3startLog() {
    console.log("outro3start Log !");
  }
  function intro3endLog() {
    console.log("intro3end Log !");
  }
  function outro3endLog() {
    setTimeout(() => {
      outro3Ended = true;
    }, 200);
    console.log("outro3end Log !");
  }
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  Type Writing
</label>
<label>
  <input type="checkbox" bind:checked={visible2} />
  Auto Type Writing Deleting
</label>
<label>
  <input type="checkbox" bind:checked={visible6} />
  visible6
</label>

<button on:click={() => (visible3 = !visible3)}>Start1</button>
<button on:click={() => (visible5 = !visible5)}>Start2</button>
{#if visible}
  <p in:typewriter1 out:typedeleter1>
    The quick brown fox jumps over the lazy dog
  </p>
{/if}
{#if visible2}
  <p in:typewriter2 out:typedeleter2>
    The quick brown fox jumps over the lazy dog
  </p>
{/if}
{#if visible3}
  <p
    in:typewriter3
    out:typedeleter3={{ delay: 800, removedCharacters: 6 }}
    on:introstart={intro1startLog}
    on:introend={intro1endLog}
    on:outrostart={outro1startLog}
    on:outroend={outro1endLog}>
    The quick brown fox jumps over the lazy dog 🐶
  </p>
{/if}
{#if outro1Ended}
  <p>
    The quick brown fox jumps over the lazy
    {#if visible4}
      <span in:typewriter4={{ delay: 0 }}>cat 🐱</span>
    {/if}
  </p>
{/if}
{#if visible5 && !intro2Ended}
  <p
    in:typewriter3
    on:introstart={intro2startLog}
    on:introend={intro2endLog}
    on:outrostart={outro2startLog}
    on:outroend={outro2endLog}>
    The quick brown fox jumps over the lazy dog 🐶
  </p>
{/if}
{#if intro2Ended}
  <p>
    The quick brown fox jumps over the
    {#if visible6}
      <span
        out:typedeleter4={{ delay: 800 }}
        on:introstart={intro3startLog}
        on:introend={intro3endLog}
        on:outrostart={outro3startLog}
        on:outroend={outro3endLog}>
        lazy dog 🐶
      </span>
    {/if}
    {#if outro3Ended}
      <span in:typewriter4={{ delay: 800 }}>lazy cat 🐱</span>
    {/if}
  </p>
{/if}
