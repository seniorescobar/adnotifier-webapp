<template>
  <div class="view-home">
    <b-container>
      <b-row>
        <template v-if="loggedIn">
          <b-col cols=12>
            <h1>Welcome back.</h1>
          </b-col>
          <b-col cols=12>
            <b-button to="/dashboard">Go to dashboard</b-button>
          </b-col>
        </template>
        <template v-else>
          <b-col cols=12>
            <h1>Welcome to adnotifier.</h1>
          </b-col>
          <b-col cols=12>
            <b-button to="/login">Log in</b-button>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BButton, BContainer, BRow, BCol } from 'bootstrap-vue'

export default {
  name: 'home',
  components: {
    'b-button': BButton,
    'b-container': BContainer,
    'b-row': BRow,
    'b-col': BCol
  },
  data () {
    return {
      loggedIn: true
    }
  }
}
</script>
