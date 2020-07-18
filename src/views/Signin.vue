<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 offset-lg-4">
          <form class="form-signin w-100 pt-5" @submit.prevent="signin">
            <h1 class="h3 mb-3 text-left font-weight-normal">Sign in</h1>
            <label for="inputUsername" class="sr-only">Username</label>
            <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus v-model="username">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control mb-2" placeholder="Password" required v-model="password">
            <button class="btn btn-primary btn-block" type="submit">Sign in</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signin () {
      console.log('Signing in with:', this.username, this.password)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.form-signin {
  .form-control:focus {
    z-index: 2;
  }
  input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
</style>
