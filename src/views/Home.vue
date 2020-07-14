<template>
  <div class="view-home">
    <div class="container">
      <div class="alert alert-dark" role="alert">
        <button @click="loggedIn = !loggedIn" class="btn btn-dark">Debug: Toggle logged in state</button>
      </div>
      <div class="row mb-3">
        <div class="col">
          <template v-if="loggedIn">
            <h1>Welcome back, John Doe.</h1>
            <router-link to="/dashboard" as="button" class="btn btn-primary">
              Go to your dashboard.
            </router-link>
          </template>
          <template v-else>
            <h1>Welcome to AdNotifier!</h1>
            <router-link to="/login" as="button" class="btn btn-primary">
              Log in!
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      loggedIn: false
    }
  }
}
</script>
