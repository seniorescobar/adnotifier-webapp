<template>
  <div class="form-user-properties">
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        label="Email address:"
        label-for="input-email-address"
      >
        <b-form-input
          id="input-email-address"
          v-model="form.email"
          type="email"
          required
          placeholder="john.doe@adnotifier.io"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Change password to:"
        label-for="input-password"
      >
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="••••••••••••••"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Repeat new password:"
        label-for="input-password-repeat"
      >
        <b-form-input
          id="input-password-repeat"
          v-model="form.passwordRepeat"
          type="password"
          required
          placeholder="••••••••••••••"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Change settings</b-button>
    </b-form>
  </div>
</template>

<script>
import { BForm, BButton, BFormGroup, BFormInput } from 'bootstrap-vue'

export default {
  name: 'form-login',
  components: {
    'b-form': BForm,
    'b-button': BButton,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput
  },
  data () {
    return {
      form: {
        email: 'john.doe@adnotifier.io',
        password: '',
        passwordRepeat: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.password !== this.passwordRepeat) {
        alert('The new passwords do not match.')
        return
      }
      console.log(`Submitting login request for ${this.form.email}.`)
    }
  }
}
</script>
