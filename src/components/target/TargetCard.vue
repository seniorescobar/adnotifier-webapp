<template>
  <div class="row mb-2">
    <div class="col">
      <router-link
        :to="{ name: 'target', params: { id: target.id } }"
        class="btn btn-block btn-lg text-left"
        :class="{'btn-primary border-primary': target.enabled, 'btn-secondary border-secondary': !target.enabled}"
      >
        <div class="row">
          <div class="col">
            <span>{{ target.title }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="text-warning">{{ target.site }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["target"],
};
</script>