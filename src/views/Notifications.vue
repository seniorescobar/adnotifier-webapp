<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="col-lg-8 offset-lg-2">
        <div class="row mb-1 pt-3">
          <div class="col">
            <router-link to="/dashboard">
              <font-awesome-icon icon="arrow-left" />
              Targets
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1 class="title">Notifications</h1>
          </div>
        </div>
        <div class="notifications">
          <div class="row">
            <div class="col">
              <h5>email</h5>
            </div>
          </div>
          <div class="row" v-for="(email, idx) in settings.email" :key="idx">
            <div class="col">
              <div class="notification">
                <font-awesome-icon icon="minus-circle" @click="deleteSetting('email', email)"/>
                <div class="options">{{ email }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="notification">
                <a href="#">
                  <font-awesome-icon icon="plus-circle" @click="addSetting('email', 'test@test.com')"/>
                </a>
                <input class="options" placeholder="add">
              </div>
            </div>
          </div>
        </div>
        <div class="notifications">
          <div class="row">
            <div class="col">
              <h5>sms</h5>
            </div>
          </div>
          <div class="row" v-for="(sms, idx) in settings.sms" :key="idx">
            <div class="col">
              <div class="notification">
                <font-awesome-icon icon="minus-circle" @click="deleteSetting('sms', sms)"/>
                <div class="options">{{ sms }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="notification">
                <a href="#">
                  <font-awesome-icon icon="plus-circle" @click="addSetting('sms', '+38631000000')"/>
                </a>
                <input class="options" placeholder="add">
              </div>
            </div>
          </div>
        </div>
        <div class="notifications">
          <div class="row">
            <div class="col">
              <h5>viber</h5>
            </div>
          </div>
          <div class="row" v-for="(viber, idx) in settings.viber" :key="idx">
            <div class="col">
              <div class="notification">
                <font-awesome-icon icon="minus-circle" @click="deleteSetting('viber', viber)"/>
                <div class="options">{{ viber }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="notification">
                <a href="#">
                  <font-awesome-icon icon="plus-circle" @click="addSetting('viber', '+38631000001')"/>
                </a>
                <input class="options" placeholder="add">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fakeNotificationSettings from '../data/fake-notification-settings'

export default {
  name: 'notifications',
  data () {
    return {
      settings: fakeNotificationSettings
    }
  },
  methods: {
    addSetting (type, setting) {
      console.log(`Deleting setting with type ${type}.`)
      console.log('Setting:', setting)
    },
    deleteSetting (type, setting) {
      console.log(`Deleting setting with type ${type}.`)
      console.log('Setting:', setting)
    }
  }
}
</script>

<style lang="scss" scoped>
.notifications {
  margin-bottom: 2rem;

  .notification {
    display: flex;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;

    .fa-minus-circle {
      color: $danger;
    }

    .fa-plus-circle {
      color: $success;
    }

    div.options {
      flex: 1;
      margin-left: 0.25rem;
    }

    input.options {
      flex: 1;

      padding: 0;
      margin-left: 0.25rem;

      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: black;
    }
  }
}
</style>
