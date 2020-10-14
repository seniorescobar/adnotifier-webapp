<template>
  <div class="row mb-2">
    <div class="col">
      <router-link
        :to="{ name: 'target', params: { id: id } }"
        class="btn btn-block btn-lg btn-primary border-primary text-left"
      >
        <div class="row">
          <div class="col">
            <span>{{ title }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="text-warning">{{ site }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "site"],
};
</script>