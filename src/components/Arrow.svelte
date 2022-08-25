<script>
  export let size = '';
  export let direction = 'down';
  export let circleColor = 'red';
  //   export let arrowColor = '';
</script>

<div class={`circle ${size}`} style="background-color:{circleColor};">
  <div class={`arrow ${direction} `}>
    <div class="mysvg" />
  </div>
</div>

<style>
  .mysvg {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.99999 8.78138L11.3 5.48138L12.2427 6.42405L7.99999 10.6667L3.75732 6.42405L4.69999 5.48138L7.99999 8.78138Z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
  }
  .circle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
  .small {
    width: 2em;
    height: 2em;
  }
  .medium {
    width: 3em;
    height: 3em;
  }
  .big {
    width: 4em;
    height: 4em;
  }

  .arrow {
    position: relative;
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }

  .left {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }

  .up {
    transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
  }

  .down {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  .circle:hover .mysvg {
    -webkit-animation: mover 0.5s infinite alternate;
    animation: mover 0.5s infinite alternate;
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
</style>
