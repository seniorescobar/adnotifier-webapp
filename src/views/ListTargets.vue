<template>
  <div class="row mb-2">
    <div class="col">
      <div class="input-group input-group-lg">
        <div class="input-group-prepend">
          <span class="input-group-text bg-white border-right-0">
            <font-awesome-icon icon="search" />
          </span>
        </div>
        <input
          type="text"
          class="form-control border-left-0 pl-0"
          placeholder="e.g. Mitsubishi Colt"
          v-model="query"
        />
      </div>
    </div>
  </div>

  <target-card
    v-for="target in filteredTargets"
    :key="target.id"
    :target="target"
  ></target-card>

  <div v-if="!loading && !filteredTargets.length" class="row mb-2">
    <div class="col">
      <div class="alert alert-secondary mb-0">
        Hmmm... it looks like the list of targets is empty.
      </div>
    </div>
  </div>

  <div class="row mb-2">
    <div class="col">
      <router-link
        :to="{ name: 'add-target' }"
        class="target-add btn btn-block btn-lg text-center text-light border-light border-width-3"
      >
        <font-awesome-icon icon="plus-circle" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { fetchTargets } from "../api/target.js";
import TargetCard from "../components/target/TargetCard.vue";

export default {
  components: {
    TargetCard,
  },
  setup() {
    const loading = ref(true);
    const query = ref("");
    const targets = ref([]);

    const filteredTargets = computed(() => {
      if (query.value.length > 0) {
        return targets.value.filter((search) =>
          search.title.toLowerCase().includes(query.value.toLowerCase())
        );
      }

      return targets.value;
    });

    const sortByTimestamp = (data) => {
      return data.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
          return -1;
        } else if (b.timestamp > a.timestamp) {
          return 1;
        }
        return 0;
      });
    };

    fetchTargets().then((t) => {
      targets.value = sortByTimestamp(t);
      loading.value = false;
    });

    return { loading, query, filteredTargets };
  },
};
</script>

<style lang="scss" scoped>
.target-add {
  border-style: dashed !important;
  font-size: 2.25rem;
}
</style>
