<script>
  import { fade, fly } from "svelte/transition";
  let visible1 = true;
  let visible2 = true;
  let visible3 = true;
  let status = "waiting...";
</script>

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
