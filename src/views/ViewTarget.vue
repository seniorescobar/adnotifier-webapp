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
    <div class="row mb-2">
      <div class="col">
        <template v-if="target.enabled">
          <!-- <div class="alert alert-success mb-2">
            This target is enabled. You'll be notified as soon as something new
            pops up!
          </div> -->
          <button class="btn btn-block btn-sm btn-secondary">Disable</button>
        </template>
        <template v-else>
          <!-- <div class="alert alert-warning mb-2">
            This target is disabled. We won't send you any notifications about new items.
          </div> -->
          <button class="btn btn-block btn-sm btn-secondary">Enable</button>
        </template>
      </div>
    </div>
    <div class="row mb-2">
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

function fetchTarget(id, callback) {
  fetch(
    "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/target/" +
      id,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    });
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
  beforeRouteEnter(to, from, next) {
    fetchTarget(to.params.id, (target) => {
      next((vm) => {
        vm.target = target;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    fetchTarget(to.params.id, (target) => {
      next((vm) => {
        vm.target = target;
      });
    });
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