<div class="card">
  <slot />
</div>

<style>
  .card {
    position: relative;
    display: flex;
    width: 350px;
    height: 350px;
    background-color: var(--secondaryColor);
    padding: 10px 10px;
    border-radius: 15px;
    margin: 10px 10px;
  }
</style>
