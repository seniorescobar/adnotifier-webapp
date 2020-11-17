<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <complete-signin v-if="showCompleteSignin" :user="user"></complete-signin>
      <template v-else>
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
                    v-if="signingIn"
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
                    Sign in
                  </button>
                </div>
              </div>
              <div v-if="err" class="row mb-2">
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import { useRouter } from 'vue-router';
import { useStore } from "vuex";

import CompleteSignin from "./CompleteSignin.vue";

export default {
  components: {
    CompleteSignin,
  },
  setup() {
    // const router = useRouter()
    const store = useStore();

    const signingIn = ref(false);
    const showCompleteSignin = ref(false);

    const email = ref("");
    const password = ref("");

    const err = ref(false);

    const user = ref(null);
    const signIn = async () => {
      signingIn.value = true;

      // sign in
      store.dispatch('signIn', {
        email: email.value.value,
        password: password.value.value,
      })

      signingIn.value = false;
    };

    return {
      email,
      password,
      signIn,
      signingIn,
      showCompleteSignin,
      user,
      err,
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