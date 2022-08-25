<script>
  import {onMount} from 'svelte';
  import {HomeController} from './HomeController';
  import {SportsStore} from '../../store/SportStore';
  import Sports from '../../components/Sport/Sports.svelte';

  $: sports = $SportsStore;

  onMount(() => {
    HomeController.getSportList().then(res => {
      SportsStore.update(() => {
        return res;
      });
    });
  });
</script>

<div class="home-page">
  <Sports {sports} />
</div>

<style>
  .home-page {
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
