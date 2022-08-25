<script>
  export let name;
  export let color;
  export let width = '1rem';
  export let height = '1rem';
  export let focusable = false;
  let icons = [
    {
      box: 25,
      name: 'chevron',
      svg: `<path
      id="Tracé_485"
      data-name="Tracé 485"
      className="cls-1"
      d="M11.992,9.444,3.659.661a2.068,2.068,0,0,0-3.031,0,2.344,2.344,0,0,0,0,3.194l6.818,7.186L.628,18.226a2.344,2.344,0,0,0,0,3.194,2.068,2.068,0,0,0,3.031,0l8.333-8.783A2.344,2.344,0,0,0,11.992,9.444Z"
      fill='${color}'
    />`
    }
  ];
  let displayIcon = icons.find(e => e.name === name);
</script>

<svg
  class={$$props.class}
  {focusable}
  {width}
  {height}
  viewBox="0 0 22.081 12.62"
>
  {@html displayIcon.svg}
</svg>

<style>
  svg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
