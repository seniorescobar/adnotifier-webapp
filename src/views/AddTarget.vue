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
          placeholder="URL"
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
  <div class="row" v-if="err">
    <div class="col">
      <div class="alert alert-danger" role="alert">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addTarget as apiAddTarget } from "../hooks/api.js";

import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  setup() {
    const router = useRouter();

    const adding = ref(false);
    const title = ref("");
    const url = ref("");

    const err = ref(null);

    const addTarget = async () => {
      adding.value = true;

      apiAddTarget(title.value.value, url.value.value)
        .then((newTarget) => {
          adding.value = false;

          router.push({
            name: "target",
            params: { id: newTarget.targetID },
          });
        })
        .catch((error) => {
          adding.value = false;

          error.response.json().then((e) => {
            err.value = e.text;
          });
        });
    };

    return { adding, title, url, addTarget, err };
  },
};
</script>