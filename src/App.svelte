<script>
  import CardList from './components/Card/CardList.svelte';
  import SportPage from './components/SportInfo/SportPage.svelte';

  import {Router, Route} from 'svelte-routing';

  export let url = '';
</script>

<main class="container">
  <Router {url}>
    <Route path="/" component={CardList}><CardList /></Route>
    <Route path="/sports" component={CardList}><CardList /></Route>
    <Route path="/sports/:id" let:params>
      <SportPage idSport={params.id} />
    </Route>
  </Router>
</main>
