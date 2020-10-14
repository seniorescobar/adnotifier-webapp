<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    fetch(
      "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/target"
    )
      .then((response) => response.json())
      .then((data) => {
        this.$store.dispatch("setTargets", data);
      });
  },
};
</script>