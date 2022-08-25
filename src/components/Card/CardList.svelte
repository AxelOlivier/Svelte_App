<script>
  import {onMount} from 'svelte';
  import {CardController} from './CardController';
  import CardItem from './CardItem.svelte';
  import {SportsStore} from '../../store/SportStore';

  //recuper le tableau dans le store et le stocker dans une variable , le "$" permet de garder la valeur actualisé.
  $: sportList = $SportsStore;

  onMount(() => {
    CardController.getSportList().then(res => {
      SportsStore.update(() => {
        return res;
      });
    });
  });
</script>

<div class="sportlist">
  {#each sportList as sport (sport.id)}
    <CardItem cardItem={sport} />
  {/each}
</div>

<style>
  .sportlist {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
