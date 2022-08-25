<script>
  export let background = '';
</script>

<div class="body">
  <img src={background} alt="" />
  <slot />
</div>

<style>
  .body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
  .body img {
    position: absolute;
    width: 150%;
    height: 150%;
    opacity: 0.1;
  }
</style>
