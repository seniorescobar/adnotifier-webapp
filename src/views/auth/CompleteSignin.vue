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
            <button
              v-if="completingSignin"
              class="btn btn-block btn-lg btn-primary"
              disabled
            >
              <span
                class="spinner-border"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
            <button
              v-else
              type="submit"
              class="btn btn-block btn-lg btn-primary"
            >
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
  data() {
    return {
      completingSignin: false,
    };
  },
  methods: {
    async completeSignin() {
      this.completingSignin = true;

      const newPassword = this.$refs.newPassword.$refs.password.value;
      const user = await Auth.completeNewPassword(this.user, newPassword);

      const token = user.getSignInUserSession().getIdToken().getJwtToken();

      await fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            type: "email",
            options: { to: user.challengeParam.userAttributes.email },
          }),
        }
      );

      this.$router.replace({
        name: "targets",
      });

      this.completingSignin = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner-border {
  height: 24px;
  width: 24px;
}
</style>