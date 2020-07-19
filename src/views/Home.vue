<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="row pt-5">
            <div class="col">
              <div
                class="bar d-flex align-items-center justify-content-between mb-3"
              >
                <div class="h1 mb-0">Targets</div>
                <router-link
                  to="/notifications"
                  class="btn-notifications btn-primary rounded-circle d-flex align-items-center"
                >
                  <font-awesome-icon icon="bell" />
                </router-link>
              </div>
            </div>
          </div>
          <app-search-list />
          <div class="row mb-2">
            <div class="col">
              <router-link
                to="add-target"
                class="btn btn-block btn-lg text-center text-primary border border-primary border-width-3 target-add"
              >
                <font-awesome-icon icon="plus-circle" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchList from "../components/SearchList";

export default {
  name: "home",
  components: {
    "app-search-list": SearchList
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
</style>
