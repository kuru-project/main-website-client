<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <h4>Register</h4>
      <input v-model="register_email" placeholder="Email" />
      <input
        v-model="register_password"
        type="password"
        placeholder="Password"
      />
      <input
        v-model="register_password_confirmation"
        type="password"
        placeholder="Password"
      />
      <button type="submit" @click="register">Register</button>
    </div>
    <div class="container mx-auto">
      <h4>Login</h4>
      <input v-model="login_email" placeholder="Email" />
      <input v-model="login_password" type="password" placeholder="Password" />
      <button type="submit" @click="login">Login</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Axios from 'axios'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: `${process.env.siteTitleSymbol} — El Psy Congroo!`
    }
  },
  data() {
    return {
      register_email: ``,
      register_password: ``,
      register_password_confirmation: ``,
      login_email: ``,
      login_password: ``
    }
  },
  methods: {
    login() {
      Axios.post(`${process.env.apiURL}auth/sign_in`, {
        email: this.login_email,
        password: this.login_password
      })
        .then(function(_response) {
          alert(`You have logged in!`)
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error.response.data.errors)
          alert(`Something went wrong! Check your browser logs!`)
        })
    },
    register() {
      Axios.post(`${process.env.apiURL}auth/`, {
        email: this.register_email,
        password: this.register_password,
        password_confirmation: this.register_password_confirmation
      })
        .then(function(_response) {
          alert(`You have registered!`)
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error.response.data.errors)
          alert(`Something went wrong! Check your browser logs!`)
        })
    }
  }
}
</script>
