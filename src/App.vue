<template>
  <Navigation v-if="signedIn" :email="email" :loading="loading" />
  <div class="container">
    <div class="row mt-2">
      <div class="col-lg-8 offset-lg-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Auth, Hub } from "aws-amplify";
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation,
  },
  setup() {
    const getCurrentAuthenticatedUser = async () => {
      try {
        return await Auth.currentAuthenticatedUser();
      } catch (e) {
        return false;
      }
    };

    const signedIn = ref(false);
    const email = ref(null);

    getCurrentAuthenticatedUser().then((u) => {
      if (u) {
        signedIn.value = true;
        email.value = u.attributes.email;
      }
    });

    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          signedIn.value = true;
          break;
        case "signOut":
          signedIn.value = false;
          break;
      }
    });

    return {
      signedIn,
      email: email,
      loading: false,
    };
  },
};
</script>