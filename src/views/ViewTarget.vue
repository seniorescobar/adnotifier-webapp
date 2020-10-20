<template>
  <div class="row">
    <div class="col">
      <back-button name="targets" text="Targets"></back-button>
    </div>
  </div>
  <template v-if="target">
    <div class="row">
      <div class="col">
        <h1 class="mb-0">{{ target.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-secondary">Added: {{ target.timestamp }}</p>
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
import { Auth } from "aws-amplify";

import BackButton from "../components/BackButton.vue";

async function fetchTarget(id) {
  const sess = await Auth.currentSession();
  const token = sess.getIdToken().getJwtToken();

  return fetch(
    "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/target/" +
      id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  ).then((r) => r.json());
}

export default {
  components: {
    BackButton,
  },
  data() {
    return {
      target: null,
    };
  },
  async beforeRouteEnter(to, from, next) {
    const target = await fetchTarget(to.params.id);
    next((vm) => {
      vm.target = target;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    const target = await fetchTarget(to.params.id);
    next((vm) => {
      vm.target = target;
    });
  },
  methods: {
    async deleteTarget() {
      const sess = await Auth.currentSession();
      const token = sess.getIdToken().getJwtToken();

      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/target/" +
          this.target.id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
        .then((response) => response.json())
        .then(() => {
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