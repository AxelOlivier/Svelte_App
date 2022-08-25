<div class="card">
  <slot />
</div>

<style>
  .card {
    position: relative;
    width: 350px;
    height: 350px;
    display: flex;
    color: black;
    flex-direction: column;
    background-color: var(--secondaryColor);
    padding: 10px 10px;
    border-radius: 15px;
    margin: 10px 10px;
  }
</style>
