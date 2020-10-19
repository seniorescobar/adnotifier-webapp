<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
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
                  <button
                    type="submit"
                    class="btn btn-block btn-lg btn-primary"
                  >
                    {{ signingIn ? "Signing in..." : "Sign in" }}
                  </button>
                </div>
              </div>
              <div v-if="error" class="row mb-2">
                <div class="col">
                  <div class="alert alert-danger mb-0">
                    Sorry, your email or password was incorrect.
                  </div>
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
      <complete-signin v-if="showCompleteSignin" :user="user"></complete-signin>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

import CompleteSignin from './CompleteSignin.vue'

export default {
  components: {
    CompleteSignin
  },
  data() {
    return {
      signingIn: false,
      showCompleteSignin: false,
      user: null,
      error: false,
    };
  },
  methods: {
    async signIn() {
      this.signingIn = true;

      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      try {
        const user = await Auth.signIn(email, password);
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          this.user = user;
          this.showCompleteSignin = true;

          return;
        }

        this.$router.replace({
          name: "targets",
        });
      } catch (e) {
        this.signingIn = false;
        this.error = true;
      }
    },
  },
};
</script>