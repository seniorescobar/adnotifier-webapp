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
import { ref, computed } from "vue";

import {
  fetchNotifications,
  addNotification as apiAddNotification,
  deleteNotification as apiDeleteNotification,
} from "../../api/settings.js";

import BackButton from "../../components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  setup() {
    const loading = ref(true)

    const notifications = ref([]);
    const emails = computed(() => {
      return notifications.value.filter((n) => n.type === "email");
    });

    const emailTo = ref("");

    fetchNotifications().then((n) => {
      loading.value = false
      notifications.value = n
    })

    const addNotification = async (type, event) => {
      let options = {};
      switch (type) {
        case "email":
          options = { to: emailTo.value.value };
          break;
      }

      const newNotification = await apiAddNotification(type, options);
      notifications.value.push({
        id: newNotification.notificationID,
        type: newNotification.type,
        options: JSON.parse(newNotification.options),
      });

      event.target.reset();
    };

    const deleteNotification = async (id) => {
      await apiDeleteNotification(id);

      notifications.value = notifications.value.filter(
        (notification) => notification.id !== id
      );
    };

    return { loading, emails, emailTo, addNotification, deleteNotification };
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