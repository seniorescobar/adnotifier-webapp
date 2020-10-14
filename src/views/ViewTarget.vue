<template>
  <div class="row">
    <div class="col">
      <back-button name="targets" text="Targets"></back-button>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col">
      <h1>{{ target.title }}</h1>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col">
      <div class="target-link border border-primary border-width-3 rounded p-2">
        <a :href="target.url" class="text-info" target="_blank">{{ target.url }}</a>
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

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  computed: {
    target() {
      return this.$store.getters.getTarget(this.$route.params.id);
    },
  },
  methods: {
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
          this.$router.push({ name: "targets" });
          this.$store.dispatch("deleteTarget", this.target.id);
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