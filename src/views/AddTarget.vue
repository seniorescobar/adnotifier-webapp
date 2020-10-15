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
    <div class="row mb-2">
      <div class="col">
        <button type="submit" class="btn btn-block btn-lg btn-primary">
          {{ adding ? "Adding..." : "Add" }}
        </button>
      </div>
    </div>
  </form>
  <div class="row" v-if="error">
    <div class="col">
      <div class="alert alert-danger" role="alert">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  data() {
    return {
      adding: false,
      error: null,
    };
  },
  methods: {
    addTarget() {
      this.adding = true;

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
        .then((response) => {
          if (!response.ok) {
            var err = new Error();
            err.response = response;
            throw err;
          }

          return response.json();
        })
        .then(() => {
          this.$router.push({ name: "targets" });
        })
        .catch((error) => {
          this.adding = false;

          error.response.json().then((error) => {
            this.error = error.text;
          });
        });
    },
  },
};
</script>

<style lang="scss">
</style>