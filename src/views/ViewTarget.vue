<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="row">
            <div class="col">
              <router-link to="/" class="back text-primary">
                <h5 class="pt-3">
                  <font-awesome-icon icon="arrow-left" />
                  Targets
                </h5>
              </router-link>
            </div>
          </div>
          <form @submit.prevent="deleteTarget">
            <div class="row mb-2">
              <div class="col">
                <div class="h1">{{ target.name ? target.name : 'N/A' }}</div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <div class="target-link border border-primary rounded p-2">
                  <a class="text-info" v-bind:href="target.query" target="_blank">{{ target.query }}</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button id="target-delete" class="btn btn-block btn-lg btn-primary" type="submit">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searches from '../data/fake-searches'
export default {
  name: 'view-target',
  computed: {
    target () {
      return searches.find(search => search.id === parseInt(this.$route.params.id))
    }
  },
  methods: {
    deleteTarget () {
      console.log('Deleting target')
    }
  }
}
</script>

<style lang="scss" scoped>
.target-link {
  max-height: 256px;
  border-width: 3px !important;
  overflow-y: scroll;
  overflow-wrap: break-word;
}
</style>
