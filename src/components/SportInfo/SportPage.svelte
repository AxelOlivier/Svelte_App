<script>
  export let idSport;
  import Loader from '../loader.svelte';
  import {onMount} from 'svelte';
  import {CardController} from '../Card/CardController';
  import SportRelation from './SportRelation.svelte';
  import Arrow from '../Arrow.svelte';

  let infosport;
  let error;
  onMount(() => {
    CardController.getSportByName(idSport)
      .then(res => {
        console.log(res);
        infosport = res;
      })
      .catch(err => {
        error = err.response.data.error;
        console.log(err.response.data.error);
      });
  });

  const goScroll = element => {
    console.log('element', element);
    let elem = document.getElementsByClassName(element);
    window.scrollTo({top: elem[0].offsetTop, behavior: 'smooth'});
  };
</script>

<div class="body-page">
  {#if infosport}
    <div class="firstpart">
      <div class="sport-contain">
        <div class="sport-image">
          <div class="border-image">
            <div class="content-image">
              <img
                src={infosport.relationships.images.data[0].url}
                alt="SportLogo"
              />
            </div>
          </div>
        </div>

        <div class="sport-text">
          <h3>{infosport.attributes.name}</h3>
          <p>
            {#if infosport.attributes.description != null}
              {infosport.attributes.description}
            {:else}
              <p>Pas de description correspondante à ce sport</p>
            {/if}
          </p>
        </div>
      </div>

      <div class="iconscroll" on:click={() => goScroll('sport-related')}>
        <Arrow
          circleColor={'white'}
          direction={''}
          arrowColor={'var(--primaryColor)'}
          size={'big'}
        />
      </div>
    </div>

    <div class="secondpart">
      <div class="sport-related">
        <SportRelation {infosport} />
      </div>
    </div>
  {:else if error}
    <h1>{error}</h1>
  {:else}
    <Loader />
  {/if}
</div>

<style>
  .body-page {
    width: 100%;
  }
  .firstpart {
    height: 100vh;
  }
  .secondpart {
    height: 100vh;
  }
  .sport-contain {
    position: relative;
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }

  .sport-image {
    position: relative;
    display: flex;
    width: 60vw;
    height: 72vh;
    justify-content: center;
    object-fit: contain;
    transform: skewY(-4deg);
    overflow: hidden;
  }
  .sport-image img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .sport-image .border-image {
    overflow: hidden;
    position: relative;
    border-bottom-right-radius: 6rem;
    width: 85%;
    height: 85%;
  }
  .content-image {
    transform: skewY(4deg);
    box-sizing: border-box;
    transform-origin: top left;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .sport-text {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .sport-text h3 {
    font-size: 100px;
    text-align: center;
    line-height: 11vh;
    padding: 20px;
  }

  .iconscroll {
    position: relative;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
