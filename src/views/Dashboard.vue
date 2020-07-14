<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="col-lg-8 offset-lg-2">
        <div class="row pt-5">
          <div class="col">
            <div class="bar">
              <div class="h1">Targets</div>
              <router-link to="/notifications" class="btn btn-primary rounded-circle">
                <font-awesome-icon icon="bell" />
              </router-link>
            </div>
          </div>
        </div>
        <app-search-list />
        <div class="row mb-2">
          <div class="col">
            <router-link to="add-target" class="btn btn-block text-center target-add">
              <font-awesome-icon icon="plus-circle" />
              <span class="fas fa-plus-circle"></span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchList from '../components/SearchList'

export default {
  name: 'dashboard',
  components: {
    'app-search-list': SearchList
  }
}
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;

  .h1 {
    margin-bottom: 0;
  }

  button {
    padding: 4px 10px;
  }
}

.target-add {
  border-color: $primary;
  border-style: dashed !important;
  border-width: 3px;

  > * {
    font-size: 40px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
}
</style>
