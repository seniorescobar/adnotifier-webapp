<template>
  <h5 class="pt-3">
    <router-link :to="{ name: name }">
      <font-awesome-icon icon="arrow-left" />
      {{ text }}
    </router-link>
  </h5>
</template>

<script>
export default {
  props: ['name', 'text']
}
</script>

<style lang="scss" scoped>
a {
    color: black;
    &:hover {
        text-decoration: none;
    }
}
</style>