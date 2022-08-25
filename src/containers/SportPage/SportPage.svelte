<script>
  export let idSport;
  import Loader from '../../components/loader.svelte';
  import {onMount} from 'svelte';
  import {HomeController} from '../../containers/HomePage/HomeController';
  import SportInfos from '../../components/SportInfo/SportInfos.svelte';

  let sport;
  onMount(() => {
    HomeController.getSportByName(idSport)
      .then(res => {
        sport = res;
      })
      .catch(err => {
        throw err;
      });
  });
</script>

<div class="sport-page">
  {#if sport}
    <SportInfos {sport} />
  {:else}
    <Loader />
  {/if}
</div>

<style>
  .sport-page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }
</style>
