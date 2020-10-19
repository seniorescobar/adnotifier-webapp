<template>
    <p>Signing out...</p>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  async created() {
    await Auth.signOut();
    this.$router.push({
      name: "signin",
    });
  },
};
</script>