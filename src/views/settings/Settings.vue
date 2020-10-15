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
  <div class="notification-group mb-3">
    <div class="row">
      <div class="col">
        <h2>sms</h2>
      </div>
    </div>
    <div class="row" v-for="sms in smses" :key="sms.id">
      <div class="col">
        <div class="notification d-flex mb-1">
          <button
            @click="deleteNotification(sms.id)"
            class="p-0 border-0 bg-transparent"
          >
            <font-awesome-icon class="text-danger" icon="minus-circle" />
          </button>
          <div class="options ml-1">
            {{ formatPhoneNumber(sms.options.phoneNumber) }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form
          @submit.prevent="addNotification('sms', $event)"
          class="notification d-flex mb-1"
        >
          <button type="submit" class="p-0 border-0 bg-transparent">
            <font-awesome-icon class="text-success" icon="plus-circle" />
          </button>
          <input
            type="tel"
            class="options border-top-0 border-left-0 border-right-0 border-bottom border-primary rounded-0 ml-1 p-0"
            placeholder="e.g. +38600000000"
            required
            pattern="\+386\d{8}"
            ref="smsPhoneNumber"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../../components/BackButton.vue";

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
    smses() {
      return this.notifications.filter((n) => n.type === "sms");
    },
  },
  methods: {
    formatPhoneNumber(num) {
      return num.replace(/^00/g, "+");
    },
    addNotification(type, event) {
      let options = {};
      switch (type) {
        case "email":
          options = { to: this.$refs.emailTo.value };
          break;
        case "sms":
          options = { phoneNumber: this.$refs.smsPhoneNumber.value };
          break;
      }

      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/notification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type: type,
            options: options,
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
    deleteNotification(id) {
      fetch(
        "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/notification/" +
          id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
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
  created() {
    fetch(
      "https://rftdwuwyj4.execute-api.eu-central-1.amazonaws.com/prod/notification"
    )
      .then((resp) => resp.json())
      .then((json) => (this.notifications = json));
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