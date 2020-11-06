<template>
  <div class="row">
    <div class="col">
      <back-button name="targets" text="Targets"></back-button>
    </div>
  </div>
    <div class="row">
      <div class="col">
        <h1 class="mb-0" :class="{'bg-primary':loading}">{{ target ? target.title : '&nbsp;' }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-secondary" :class="{'bg-secondary':loading}">{{ target ? 'Added: ' + target.timestamp : '&nbsp;' }}</p>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col">
        <a
          :href="target ? target.url : ''"
          class="btn btn-block btn-secondary"
          target="_blank"
          :class="{'disabled':loading}"
        >
          {{ target ? 'Open link in new tab' : '&nbsp;' }}
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-block btn-lg btn-danger" @click="deleteTarget" :disabled="loading">
          {{ target ? 'Delete' : '&nbsp;' }}
        </button>
      </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { fetchTarget, deleteTarget as apiDeleteTarget } from "../api/target.js";
import { useRoute, useRouter } from "vue-router";

import BackButton from "../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;

    const loading = ref(true);

    const target = ref(null);
    fetchTarget(id).then((t) => {
      target.value = t;
      loading.value = false
    });

    const deleteTarget = async () => {
      await apiDeleteTarget(id);
      router.push({ name: "targets" });
    };

    return {
      loading,
      target,
      deleteTarget,
    };
  },
};
</script>