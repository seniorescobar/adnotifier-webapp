<template>
  <div class="view-dashboard">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="row">
            <div class="col">
              <router-link to="/" class="back text-primary">
                <h5 class="pt-3">
                  <font-awesome-icon icon="arrow-left" />
                  Targets
                </h5>
              </router-link>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h1 class="title">Notifications</h1>
            </div>
          </div>
          <div class="notifications mb-3">
            <div class="row">
              <div class="col">
                <h2>email</h2>
              </div>
            </div>
            <div class="row" v-for="(email, idx) in settings.email" :key="idx">
              <div class="col">
                <div class="notification d-flex mb-1">
                  <div>
                    <a href="#">
                      <font-awesome-icon class="text-danger" icon="minus-circle" @click="deleteSetting('email', email)"/>
                    </a>
                  </div>
                  <div class="options ml-1">{{ email }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="notification d-flex mb-1">
                  <a href="#">
                    <font-awesome-icon class="text-success" icon="plus-circle" @click="addSetting('email', 'test@test.com')"/>
                  </a>
                  <input class="options border-top-0 border-left-0 border-right-0 border-bottom border-primary rounded-0 ml-1 p-0" placeholder="add">
                </div>
              </div>
            </div>
          </div>
          <div class="notifications mb-3">
            <div class="row">
              <div class="col">
                <h2>sms</h2>
              </div>
            </div>
            <div class="row" v-for="(sms, idx) in settings.sms" :key="idx">
              <div class="col">
                <div class="notification d-flex mb-1">
                  <div>
                    <a href="#">
                      <font-awesome-icon class="text-danger" icon="minus-circle" @click="deleteSetting('sms', sms)"/>
                    </a>
                  </div>
                  <div class="options ml-1">{{ sms }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="notification d-flex mb-1">
                  <a href="#">
                    <font-awesome-icon class="text-success" icon="plus-circle" @click="addSetting('sms', '+38631000000')"/>
                  </a>
                  <input class="options border-top-0 border-left-0 border-right-0 border-bottom border-primary rounded-0 ml-1 p-0" placeholder="add">
                </div>
              </div>
            </div>
          </div>
          <div class="notifications mb-3">
            <div class="row">
              <div class="col">
                <h2>viber</h2>
              </div>
            </div>
            <div class="row" v-for="(viber, idx) in settings.viber" :key="idx">
              <div class="col">
                <div class="notification d-flex mb-1">
                  <div>
                    <a href="#">
                      <font-awesome-icon class="text-danger" icon="minus-circle" @click="deleteSetting('viber', viber)"/>
                    </a>
                  </div>
                  <div class="options ml-1">{{ viber }}</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="notification d-flex mb-1">
                  <a href="#">
                    <font-awesome-icon class="text-success" icon="plus-circle" @click="addSetting('viber', '+38631000001')"/>
                  </a>
                  <input class="options border-top-0 border-left-0 border-right-0 border-bottom border-primary rounded-0 ml-1 p-0" placeholder="add">
                </div>
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
  .notification {
    font-size: 1.5rem;

    div.options, input.options {
      flex: 1;
    }
  }
}
</style>
