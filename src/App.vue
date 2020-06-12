<template>
  <div id="app">
    <app-navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    'app-navigation': Navigation
  }
}
</script>
