<template>
  <div class="row mt-5">
    <div class="col">
      <p class="mb-2">Please enter a new password.</p>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <form @submit.prevent="completeSignin">
        <div class="row mb-2">
          <div class="col">
            <password-input
              placeholder="New password"
              ref="newPassword"
            ></password-input>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col">
            <button type="submit" class="btn btn-block btn-lg btn-primary">
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

import PasswordInput from "../../components/PasswordInput.vue";

export default {
  props: ["user"],
  components: {
    PasswordInput,
  },
  methods: {
    async completeSignin() {
      const newPassword = this.$refs.newPassword.$refs.password.value;
      await Auth.completeNewPassword(this.user, newPassword);

      this.$router.replace({
        name: "targets",
      });
    },
  },
};
</script>