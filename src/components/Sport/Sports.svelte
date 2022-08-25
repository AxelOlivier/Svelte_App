<script>
  import Sport from './Sport.svelte';
  export let sports = [];
</script>

<div class="sports">
  {#each sports as sport (sport.id)}
    <Sport {sport} />
  {/each}
</div>

<style>
  .sports {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
