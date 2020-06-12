<template>
  <div>
    <b-nav>
      <b-nav-item to="/login" v-if="loggedIn">Log out</b-nav-item>
      <b-nav-item to="/login" v-else>Log in</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  name: 'navigation',
  components: {
    'b-nav': BNav,
    'b-nav-item': BNavItem
  },
  data () {
    return {
      loggedIn: true
    }
  }
}
</script>
