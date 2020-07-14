<template>
  <div class="view-login text-center">
    <form class="form-signin" @submit.prevent="logIn">
      <h1 class="h3 mb-3 text-left font-weight-normal">Sign in</h1>
      <label for="inputEmail" class="sr-only">Username</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      console.log('Logging in with:', this.email, this.password)
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="scss" scoped>
.view-login {
  height: 100vh;
  display: flex;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
