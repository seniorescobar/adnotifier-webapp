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
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { addNotification } from '../../api/settings.js'
import { Auth } from "aws-amplify";
import PasswordInput from "../../components/PasswordInput.vue";

export default {
  props: ["user"],
  components: {
    PasswordInput,
  },
  setup(props) {
    const router = useRouter()

    const newPassword = ref('')

    const completingSignin = ref(false);
    const completeSignin = async () => {
      completingSignin.value = true;

      const user = await Auth.completeNewPassword(props.user, newPassword.value.password.value);
      await addNotification('email', { to: user.challengeParam.userAttributes.email }) 

      router.replace({
        name: "targets",
      });

      completingSignin.value = false;
    };

    return {
      newPassword,
      completeSignin,
      completingSignin,
    };
  },
};
</script>

<style lang="scss" scoped>
.spinner-border {
  height: 24px;
  width: 24px;
}
</style>