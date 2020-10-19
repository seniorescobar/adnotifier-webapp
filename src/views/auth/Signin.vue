<template>
  <template v-if="!showCompleteSignin">
    <div class="row mt-5">
      <div class="col">
        <form @submit.prevent="signIn">
          <div class="row mb-2">
            <div class="col">
              <input
                id="email"
                type="email"
                placeholder="Email"
                class="form-control form-control-lg"
                required
                ref="email"
              />
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <input
                id="password"
                type="password"
                placeholder="Password"
                class="form-control form-control-lg"
                required
                ref="password"
              />
            </div>
          </div>
          <div class="row mb-2">
            <div class="col">
              <button type="submit" class="btn btn-block btn-lg btn-primary">
                {{signingIn ? 'Signing in...':'Sign in'}}
              </button>
            </div>
          </div>
          <div class="row text-center">
            <div class="col">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  <template v-else>
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
</template>

<script>
import { Auth } from "aws-amplify";
import PasswordInput from "../../components/PasswordInput.vue";

export default {
  components: {
    PasswordInput,
  },
  data() {
    return {
      signingIn: false,
      showCompleteSignin: false,
      user: null,
    };
  },
  methods: {
    async signIn() {
      this.signingIn = true;

      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      const user = await Auth.signIn(email, password);
      console.log(user)
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        this.showCompleteSignin = true;
        this.user = user;

        return;
      }

      this.redirect();
    },
    async completeSignin() {
      const newPassword = this.$refs.newPassword.$refs.password.value;
      await Auth.completeNewPassword(this.user, newPassword);

      this.redirect();
    },
    redirect() {
      this.$router.replace({
        name: "targets",
      });
    },
  },
};
</script>