<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input
        v-model="password_confirmation"
        type="password"
        placeholder="Password"
      />
      <button type="submit" @click="register">Register</button>
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
      title: `${process.env.siteTitle} — El Psy Congroo!`
    }
  },
  data() {
    return {
      email: ``,
      password: ``,
      password_confirmation: ``
    }
  },
  methods: {
    register() {
      Axios.post(`${process.env.apiURL}auth/`, {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then(function(_response) {
          alert(`You have registered!`)
        })
        .catch(function(error) {
          alert(error.response.data.errors.full_messages.join(` - `))
        })
    }
  }
}
</script>
