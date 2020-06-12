<template>
  <div class="search-list">
    <b-card-group deck>
      <b-card
        v-for="(search, idx) in searches"
        :key="idx"
        :title="search.title"
        img-src="https://picsum.photos/600/300"
        :img-alt="'Display picture for website' + search.type"
        img-top
        tag="article"
        class="mb-2">

        <b-card-text>
          Query: <a :href="search.query">{{ search.query }}</a>
        </b-card-text>

        <b-button variant="primary">Edit</b-button>
        <b-button variant="danger" class="ml-2">Remove</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { BCard, BCardText, BButton, BCardGroup } from 'bootstrap-vue'
import FakeSearches from '../data/fake-searches.js'

export default {
  name: 'search-list',
  components: {
    'b-card': BCard,
    'b-card-text': BCardText,
    'b-button': BButton,
    'b-card-group': BCardGroup
  },
  data () {
    return {
      searches: FakeSearches
    }
  }
}
</script>
