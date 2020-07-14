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
        <form @submit.prevent="addTarget">
          <div class="row mb-2">
            <div class="col">
              <input class="h1" placeholder="Name" v-model="name">
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <textarea name="" id="" cols="30" rows="10" placeholder="Link" v-model="query"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button id="target-add" class="btn btn-block btn-primary" type="submit">Add</button>
            </div>
          </div>
        </form>
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
