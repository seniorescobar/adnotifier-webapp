<template>
  <div class="input-group">
    <input
      id="password"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
      class="form-control form-control-lg border-right-0"
      required
      ref="password"
    />
    <div class="input-group-append">
      <button
        class="btn btn-secondary border-left-0"
        type="button"
        @click="showPassword = !showPassword"
      >
        <font-awesome-icon v-if="!showPassword" icon="eye" />
        <font-awesome-icon v-else icon="eye-slash" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['placeholder'],
    data() {
        return {
            showPassword: false,
        }
    }
}
</script>