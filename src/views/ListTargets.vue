<template>
  <div class="row pt-5">
    <div class="col">
      <div class="bar d-flex align-items-center justify-content-between mb-3">
        <div class="h1 mb-0">Targets</div>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            aleksandar
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <router-link class="dropdown-item" :to="{ name: 'settings' }">Settings</router-link>
            <a class="dropdown-item" href="#">Log out</a>
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
    :id="target.id"
    :title="target.title"
    :site="target.site"
  ></target-card>

  <div class="row mb-2">
    <div class="col">
      <router-link
        :to="{ name: 'add-target' }"
        class="target-add btn btn-block btn-lg text-center text-primary border-primary border-width-3"
      >
        <font-awesome-icon icon="plus-circle"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import TargetCard from "../components/target/TargetCard.vue";

export default {
  components: {
    TargetCard,
  },
  computed: {
    targets() {
      return this.$store.getters.getTargets;
    },
  }
};
</script>

<style lang="scss" scoped>
.btn-notifications {
  font-size: 1.25rem;
  height: 45px;
  width: 45px;

  > svg {
    flex: 1;
  }
}

.target-add {
  border-style: dashed !important;
  font-size: 2.25rem;
}

.border-width-3 {
  border-width: 3px !important;
}
</style>