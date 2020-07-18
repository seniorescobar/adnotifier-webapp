<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="row pt-5">
            <div class="col">
              <div class="bar d-flex align-items-center justify-content-between mb-3">
                <div class="h1 mb-0">Targets</div>
                <router-link to="/notifications" class="btn btn-primary rounded-circle">
                  <font-awesome-icon icon="bell" />
                </router-link>
              </div>
            </div>
          </div>
          <app-search-list />
          <div class="row mb-2">
            <div class="col">
              <router-link to="add-target" class="btn btn-block text-center text-primary border border-primary target-add">
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
import SearchList from '../components/SearchList'

export default {
  name: 'home',
  components: {
    'app-search-list': SearchList
  }
}
</script>

<style lang="scss" scoped>
.target-add {
  border-style: dashed !important;
  border-width: 3px !important;
  font-size: 1.75rem;
}
</style>
