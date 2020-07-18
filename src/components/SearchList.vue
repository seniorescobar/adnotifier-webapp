<template>
  <div class="search-list">
    <div class="row mb-3">
      <div class="col">
        <div class="input-group input-group-lg target-search">
          <div class="input-group-prepend">
            <span class="input-group-text bg-white border-right-0 border-primary" id="search-addon">
              <font-awesome-icon icon="search" />
            </span>
          </div>
          <input type="text" class="form-control border-left-0 border-primary pl-0" placeholder="Filter targets" aria-label="Search"
            aria-describedby="search-addon" v-model="searchQuery">
        </div>
      </div>
    </div>
    <div class="row mb-2" v-for="(search, idx) in searches" :key="idx">
      <div class="col">
        <router-link :to="`/view-target/${search.id}`" class="btn btn-block btn-lg btn-primary text-left target">
          <div class="row">
            <div class="col">
              <span class="name">{{ search.name }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span class="site text-warning">{{ search.type }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import fakeSearches from '../data/fake-searches.js'

export default {
  name: 'search-list',
  data () {
    return {
      searchQuery: ''
    }
  },
  computed: {
    searches () {
      if (this.searchQuery.length > 0) {
        return fakeSearches.filter(search => search.name.toLowerCase().startsWith(this.searchQuery.toLowerCase()))
      }
      return fakeSearches
    }
  }
}
</script>

<style lang="scss" scoped>
.target-search {
  > .input-group-prepend > #search-addon {
    border-width: 3px !important;
  }

  > input {
    border-width: 3px !important;
  }
}
</style>
