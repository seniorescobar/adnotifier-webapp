<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="col-lg-8 offset-lg-2">
        <div class="row mb-1 pt-3">
          <div class="col">
            <router-link to="/dashboard" class="back">
              <font-awesome-icon icon="arrow-left" />
              Targets
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
              <textarea disabled name="" id="" cols="30" rows="10" placeholder="Link" v-model="target.query"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button id="target-delete" class="btn btn-block btn-warning" type="submit">Delete</button>
            </div>
          </div>
        </form>
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
input.h1 {
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color: #000001;
  border-bottom-width: 3px;
}

input.h1::placeholder {
  color: black;
  opacity: 1;
}

textarea, .target-link {
  width: 100%;
  height: 256px;
  overflow-y: scroll;
  color: black;
  padding: 5px;
  border-width: 3px;
  border-style: solid;
  border-color: #000001;
}

textarea::placeholder {
  color: black;
  opacity: 1;
}

.target-link a {
  color: blue;
  text-decoration: underline;
}
</style>
