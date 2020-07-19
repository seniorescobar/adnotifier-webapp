<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="row">
            <div class="col">
              <router-link to="/" class="back">
                <h5 class="pt-3">
                  <font-awesome-icon icon="arrow-left" />
                  Targets
                </h5>
              </router-link>
            </div>
          </div>
          <form @submit.prevent="addTarget">
            <div class="row mb-2">
              <div class="col">
                <input class="h1 border-top-0 border-left-0 border-right-0 border-bottom border-primary border-width-3 rounded-0 p-0 w-100" placeholder="Name" v-model="name">
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <textarea class="border border-primary border-width-3 rounded w-100 p-2" name="" id="" cols="30" rows="10" placeholder="Link" v-model="query"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <button id="target-add" class="btn btn-block btn-lg btn-primary" type="submit">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-target',
  data () {
    return {
      name: '',
      query: ''
    }
  },
  methods: {
    addTarget () {
      console.log('Saving new target:', this.name, this.query)
    }
  }
}
</script>

<style lang="scss" scoped>
textarea {
  overflow-y: scroll;
}
</style>
