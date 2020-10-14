<template>
  <div class="row">
    <div class="col">
      <back-button name="targets" text="Targets"></back-button>
    </div>
  </div>
  <form @submit.prevent="addTarget">
    <div class="row mb-2">
      <div class="col">
        <input
          type="text"
          class="h1 border-top-0 border-left-0 border-right-0 border-primary border-width-3 rounded-0 p-0 w-100"
          placeholder="Title"
          required
          autofocus
          ref="title"
        />
      </div>
    </div>
    <div class="row mb-2">
      <div class="col">
        <textarea
          cols="30"
          rows="10"
          placeholder="Link"
          class="border-primary border-width-3 w-100 p-2"
          required
          ref="url"
        ></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="submit" class="btn btn-block btn-lg btn-primary">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  methods: {
    addTarget() {
      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/target",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.$refs.title.value,
            url: this.$refs.url.value,
          }),
        }
      )
        .then((response) => response.json())
        .then((newTarget) => {
          this.$store.dispatch("addTarget", {
            id: newTarget.targetID,
            site: newTarget.site,
            title: newTarget.title,
            url: newTarget.url,
          });

          this.$router.push({ name: "targets" });
        });
    },
  },
};
</script>

<style lang="scss">
</style>