<template>
  <Navigation :email="email" :loading="loading"/>
  <div class="container">
    <div class="row mt-2">
      <div class="col-lg-8 offset-lg-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
  setup() {
    return {
      email: 'flyingspurs90@protonmail.com',
      loading: false,
    }
  },
};
</script>