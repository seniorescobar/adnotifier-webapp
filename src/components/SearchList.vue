<template>
  <div class="search-list">
    <div class="row mb-3">
      <div class="col">
        <div class="input-group target-search">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-addon">
              <font-awesome-icon icon="search" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Filter targets" aria-label="Search"
            aria-describedby="search-addon" v-model="searchQuery">
        </div>
      </div>
    </div>
    <div class="row mb-2" v-for="(search, idx) in searches" :key="idx">
      <div class="col">
        <router-link :to="`/view-target/${search.id}`" class="btn btn-block target">
          <div class="row">
            <div class="col">
              <span class="name">{{ search.name }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <span class="site">{{ search.type }}</span>
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
    background-color: white;
    border-color: $primary;
    border-width: 3px;
    border-right: none;
  }

  > input {
    border-color: $primary;
    border-width: 3px;
    border-left: none;
    padding-left: 0;
  }
}

.target {
  background-color: $primary;
  text-align: left;

  .name {
    color: white;
  }

  .site {
    color: yellow;
  }
}

</style>
