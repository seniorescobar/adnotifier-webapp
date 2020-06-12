<template>
  <div class="view-login">
    <b-container>
      <b-row>
        <h1>Login</h1>
      </b-row>
      <b-row>
        <app-login-form></app-login-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BRow } from 'bootstrap-vue'
import LoginForm from '../components/Forms/LoginForm'

export default {
  name: 'login',
  components: {
    'b-container': BContainer,
    'b-row': BRow,
    'app-login-form': LoginForm
  }
}
</script>
