<script>
  export let buttonVisibleOnPX = 200;
  let hidden = true;

  export const goScroll = () => {
    document.body.scrollIntoView({behavior: 'smooth'});
  };

  const scrollElement = () => {
    return document.documentElement || document.body;
  };

  const handleOnScroll = () => {
    if (
      scrollElement().scrollTo(0, document.body.scrollHeight) >
      buttonVisibleOnPX
    ) {
      hidden = false;
    } else {
      hidden = true;
    }
  };
</script>

<svelte:window on:scroll={handleOnScroll} />
