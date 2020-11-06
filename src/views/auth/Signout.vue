<template>
  <p>Signing out...</p>
</template>

<script>
import { useRouter } from "vue-router";
import { Auth } from "aws-amplify";

export default {
  setup() {
    const router = useRouter();

    Auth.signOut().then(() => {
      router.push({
        name: "signin",
      });
    });
  },
};
</script>