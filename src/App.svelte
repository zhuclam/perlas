<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import Login from '@/features/Login/Login.svelte'
</script>

<Router>
  <nav>
    <Link to="/login">Login</Link>
  </nav>
  <main class="shadow-md">
    <Route path="/"><Login /></Route>
    dadasd
  </main>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
