<script>
  import Card from './Card.svelte';
  import {Link} from 'svelte-routing';

  export let cardItem = {};

  const RegexFirstLine = text => {
    let oldtext = text.search(/[\\.!?]/);
    let newtext = text.substring(0, oldtext + 1);
    return `${newtext}`;
  };
  console.log(cardItem);
</script>

<Link to={`sports/${cardItem.attributes.slug}`}>
  <Card>
    <div class="carditem">
      <div class="card-image">
        <img src={cardItem.relationships.images.data[0].url} alt="LogoSport" />
      </div>
      <div class="card-body">
        <div class="content">
          <img
            class="background-icon"
            src={cardItem.attributes.icon}
            alt="icon"
          />
          <div class="card-title">
            <span> {cardItem.attributes.name}</span>
          </div>
          <div class="card-description">
            {#if cardItem.attributes.description != null}
              <p>{RegexFirstLine(cardItem.attributes.description)}</p>
            {:else}
              <p>Pas de description correspondante à ce sport</p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </Card>
</Link>

<style>
  .carditem {
    background-color: var(--secondaryColor);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 15px;
    user-select: none;
  }

  .carditem:hover .card-image img {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  .background-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.25;
  }

  .card-image {
    position: relative;
    width: 100%;
    height: 150px;
    overflow: hidden;
  }
  .card-image img {
    width: 100%;
    height: 100%;
    filter: grayscale(1);
    transition: transform 500ms ease-in-out;

    object-fit: cover;
  }

  .card-body {
    position: relative;
    width: 100%;
    height: calc(100% - 150px);
    text-align: center;
    padding: 15px 0px;
    box-sizing: border-box;
    color: #001018;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card-body .content {
    width: 100%;
    height: 100%;
  }
  .card-body .background-icon {
    position: absolute;
    width: 150%;
    height: 150%;
    opacity: 0.1;
    top: -25%;
    left: -25%;
  }
  .card-body .card-title {
    width: 100%;
    height: 5vh;
    color: var(--primaryColor);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-body .card-description {
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style>
