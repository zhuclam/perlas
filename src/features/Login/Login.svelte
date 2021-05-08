<script lang="ts">
  import { auth } from '@/firebase'

  let loggedIn = false

  auth().onAuthStateChanged((user) => {
    if (!user) {
      loggedIn = false
      return
    }
    console.log({
      user,
    })
    loggedIn = true
  })

  const login = () => auth().signInWithPopup(new auth.GoogleAuthProvider())
  const logout = () => auth().signOut()
</script>

<main>
  You're {loggedIn ? 'logged in' : 'logged out'}
  {#if !loggedIn}
    <button class="btn btn-green" on:click|preventDefault={login}>Log in</button
    >
  {:else}
    <button class="btn btn-green" on:click|preventDefault={logout}
      >Log out</button
    >
  {/if}
</main>
