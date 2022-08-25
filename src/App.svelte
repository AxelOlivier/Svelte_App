<script>
  import SportPage from './containers/SportPage/SportPage.svelte';
  import HomePage from './containers/HomePage/HomePage.svelte';

  import {Router, Route} from 'svelte-routing';

  export let url = '';
</script>

<main>
  <Router {url}>
    <Route path="/sports/:id" let:params>
      <SportPage idSport={params.id} />
    </Route>
    <Route path="/" component={HomePage}><HomePage /></Route>
  </Router>
</main>
