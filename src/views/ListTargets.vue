<template>
  <div class="row pt-5">
    <div class="col">
      <div
        class="bar d-flex align-items-center justify-content-end justify-content-sm-between mb-3"
      >
        <div class="d-flex align-items-center">
          <div class="h1 mb-0 d-none d-sm-block">Targets</div>
          <span
            v-if="loading"
            class="spinner-grow spinner-grow-sm ml-3"
            role="status"
            aria-hidden="true"
          ></span>
        </div>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ email }}
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <router-link class="dropdown-item" :to="{ name: 'settings' }"
              >Settings</router-link
            >
            <router-link class="dropdown-item" :to="{ name: 'signout' }"
              >Sign out</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span
            class="input-group-text bg-white text-primary border-right-0 border-primary border-width-3"
          >
            <font-awesome-icon icon="search" />
          </span>
        </div>
        <input
          type="text"
          class="form-control border-left-0 border-primary border-width-3 pl-0"
          placeholder="Search"
        />
      </div>
    </div>
  </div>

  <target-card
    v-for="target in targets"
    :key="target.id"
    :target="target"
  ></target-card>

  <div v-if="!loading && !targets.length" class="row mb-2">
    <div class="col">
      <div class="alert alert-secondary mb-0">
        Hmmm... it looks like the list of targets is empty.
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col">
      <router-link
        :to="{ name: 'add-target' }"
        class="target-add btn btn-block btn-lg text-center text-primary border-primary border-width-3"
      >
        <font-awesome-icon icon="plus-circle" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

import TargetCard from "../components/target/TargetCard.vue";

async function fetchTargets() {
  const sess = await Auth.currentSession();
  const token = sess.getIdToken().getJwtToken();

  return fetch(
    "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/target",
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((r) => r.json());
}

export default {
  components: {
    TargetCard,
  },
  data() {
    return {
      loading: false,
      email: "",
      targets: [],
    };
  },
  methods: {
    async loadTargets() {
      this.loading = true;

      const targets = await fetchTargets();
      this.targets = this.sortByTimestamp(targets);

      this.loading = false;
    },
    sortByTimestamp(data) {
      return data.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        } else if (b.timestamp > a.timestamp) {
          return 1;
        }
        return 0;
      });
    },
  },
  async created() {
    const user = await Auth.currentAuthenticatedUser();
    this.email = user.attributes.email;
    this.loadTargets();
  },
  watch: {
    $route: "loadTargets",
  },
};
</script>

<style lang="scss" scoped>
.target-add {
  border-style: dashed !important;
  font-size: 2.25rem;
}
</style>
