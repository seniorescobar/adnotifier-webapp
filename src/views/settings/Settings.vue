<template>
  <div class="row">
    <div class="col">
      <back-button name="targets" text="Targets"></back-button>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <h1>Notifications</h1>
    </div>
  </div>
  <div class="notification-group mb-3">
    <div class="row">
      <div class="col">
        <h2>email</h2>
      </div>
    </div>
    <div class="row" v-for="email in emails" :key="email.id">
      <div class="col">
        <div class="notification d-flex mb-1">
          <button
            @click="deleteNotification(email.id)"
            class="p-0 border-0 bg-transparent"
          >
            <font-awesome-icon class="text-danger" icon="minus-circle" />
          </button>
          <div class="options ml-1">{{ email.options.to }}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form
          @submit.prevent="addNotification('email', $event)"
          class="notification d-flex mb-1"
        >
          <button type="submit" class="p-0 border-0 bg-transparent">
            <font-awesome-icon class="text-success" icon="plus-circle" />
          </button>
          <input
            type="email"
            class="options border-top-0 border-left-0 border-right-0 border-bottom border-primary rounded-0 ml-1 p-0"
            placeholder="e.g. example@email.com"
            required
            ref="emailTo"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

import BackButton from "../../components/BackButton.vue";

async function fetchNotifications(callback) {
  const sess = await Auth.currentSession();
  const token = sess.getIdToken().getJwtToken();

  fetch(
    "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification",
    {
      headers: {
        Authorization: token,
      },
    }
  )
    .then((resp) => resp.json())
    .then(callback);
}

export default {
  components: {
    BackButton,
  },
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    emails() {
      return this.notifications.filter((n) => n.type === "email");
    },
  },
  methods: {
    async addNotification(type, event) {
      const sess = await Auth.currentSession();
      const token = sess.getIdToken().getJwtToken();

      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            type: type,
            options: { to: this.$refs.emailTo.value },
          }),
        }
      )
        .then((response) => response.json())
        .then((newNotification) => {
          this.notifications.push({
            id: newNotification.notificationID,
            type: newNotification.type,
            options: JSON.parse(newNotification.options),
          });

          event.target.reset();
        });
    },
    async deleteNotification(id) {
      const sess = await Auth.currentSession();
      const token = sess.getIdToken().getJwtToken();

      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/dev/notification/" +
          id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
        .then((response) => response.json())
        .then(() => {
          this.notifications = this.notifications.filter(
            (notification) => notification.id !== id
          );
        });
    },
  },
  beforeRouteEnter(to, from, next) {
    fetchNotifications((data) => {
      next((vm) => {
        vm.notifications = data;
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.notification-group {
  .notification {
    font-size: 1.5rem;
    overflow: hidden;

    a {
      cursor: pointer;
    }

    div.options,
    input.options {
      flex: 1;
    }
  }
}
</style>