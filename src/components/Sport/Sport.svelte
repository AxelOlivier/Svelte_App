<script>
  export let sport = {};

  import Card from '../Card/Card.svelte';
  import CardImage from '../Card/CardImage.svelte';
  import CardTitle from '../Card/CardTitle.svelte';
  import CardBody from '../Card/CardBody.svelte';
  import CardDescription from '../Card/CardDescription.svelte';
  import {Link} from 'svelte-routing';

  $: description = RegexFirstLine(sport.attributes.description);
  $: title = sport.attributes.name;
  $: background = sport.attributes.icon;

  const RegexFirstLine = text => {
    if (text != null) {
      let oldtext = text.search(/[\\.!?]/);
      let newtext = text.substring(0, oldtext + 1);
      return `${newtext}`;
    } else {
      return 'Pas de description correspondante à ce sport';
    }
  };
</script>

<Link to={`sports/${sport.attributes.slug}`}>
  <Card>
    <CardImage
      url={sport.relationships.images.data[0].url}
      alt={sport.attributes.name}
    />
    <CardBody {background}>
      <CardTitle>
        {title}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
    </CardBody>
  </Card>
</Link>
