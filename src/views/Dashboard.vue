<template>
  <div class="view-dashboard">
    <b-container>
      <b-row>
        <b-col cols=12>
          <h1>Dashboard</h1>
        </b-col>
      </b-row>
      <b-row class="mb-2">
        <b-col cols=12>
          <h2>Your preferences</h2>
          <app-user-properties />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols=12>
          <h2>Your searches</h2>
          <app-search-list />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import SearchList from '../components/SearchList'
import UserProperties from '../components/Forms/UserProperties'

export default {
  name: 'dashboard',
  components: {
    'b-container': BContainer,
    'b-row': BRow,
    'b-col': BCol,
    'app-search-list': SearchList,
    'app-user-properties': UserProperties
  }
}
</script>
