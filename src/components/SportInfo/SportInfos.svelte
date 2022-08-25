<script>
  export let sport = {};
</script>

<section>
  <div class="sport-container">
    <div class="sport-image">
      <div class="image-border">
        <div class="image-content">
          <img src={sport.relationships.images.data[0].url} alt="SportLogo" />
        </div>
      </div>
    </div>

    <div class="sport-text">
      <h3>{sport.attributes.name}</h3>
      {#if sport.attributes.description != null}
        <p>
          {sport.attributes.description}
        </p>
      {:else}
        <p>Pas de description correspondante à ce sport</p>
      {/if}
    </div>
  </div>
</section>

<style>
  .sport-container {
    position: relative;
    height: 100%;
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
  .sport-image .image-border {
    overflow: hidden;
    position: relative;
    border-bottom-right-radius: 6rem;
    width: 85%;
    height: 85%;
  }
  .image-content {
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
</style>
