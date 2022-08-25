<script>
  export let url = '';
  export let alt = '';
</script>

<div class="card-image">
  <img src={url} {alt} />
</div>

<style>
  .card:hover .card-image img {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  .card-image {
    position: relative;
    width: 100%;
    height: 70%;
    border-radius: 10px;
    overflow: hidden;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    filter: grayscale(1);
    transition: transform 500ms ease-in-out;
    object-fit: cover;
  }
</style>
