<template>
  <div class="row">
    <div class="col">
      <back-button name="targets" text="Targets"></back-button>
    </div>
  </div>
  <div class="row mt-2" v-if="!target">
    <div class="col">
      <div class="alert alert-danger" role="alert">
        Oops, we couldn't find this target...
      </div>
    </div>
  </div>
  <template v-else>
    <div class="row mb-2">
      <div class="col">
        <h1>{{ target.title }}</h1>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col">
        <div
          class="target-link border border-primary border-width-3 rounded p-2"
        >
          <a :href="target.url" class="text-info" target="_blank">{{
            target.url
          }}</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-block btn-lg btn-danger" @click="deleteTarget">
          Delete
        </button>
      </div>
    </div>
  </template>
</template>

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  data() {
    return {
      target: null,
    };
  },
  created() {
    this.loadTarget(this.$route);
  },
  watch: {
    $route(newRoute) {
      this.loadTarget(newRoute);
    },
  },
  methods: {
    loadTarget(route) {
      this.target = this.$store.getters.getTarget(route.params.id);
    },
    deleteTarget() {
      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/target/" +
          this.target.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then(() => {
          this.$store.dispatch("deleteTarget", this.target.id);
          this.$router.push({ name: "targets" });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.target-link {
  max-height: 256px;
  overflow-y: scroll;
  overflow-wrap: break-word;
}
</style>