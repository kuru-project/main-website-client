<template>
  <div class="bg-gray-100 flex flex-col min-h-screen">
    <Header />
    <section class="flex-1">
      <div class="container mx-auto">
        <h4 :class="label_style.join(' ')">Register</h4>
        <input
          v-model="register_email"
          :class="input_style.join(' ')"
          placeholder="Email"
        />
        <input
          v-model="register_password"
          :class="input_style.join(' ')"
          type="password"
          placeholder="Password"
        />
        <input
          v-model="register_password_confirmation"
          :class="input_style.join(' ')"
          type="password"
          placeholder="Password"
        />
        <button :class="submit_style.join(' ')" type="submit" @click="register">
          Register
        </button>
      </div>
      <div class="container mx-auto">
        <h4 :class="label_style.join(' ')">Login</h4>
        <input
          v-model="login_email"
          :class="input_style.join(' ')"
          placeholder="Email"
        />
        <input
          v-model="login_password"
          :class="input_style.join(' ')"
          type="password"
          placeholder="Password"
        />
        <button :class="submit_style.join(' ')" type="submit" @click="login">
          Login
        </button>
      </div>
    </section>
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
      title: `${process.env.siteTitle} — ${process.env.siteMotto}`
    }
  },
  data() {
    return {
      register_email: ``,
      register_password: ``,
      register_password_confirmation: ``,
      login_email: ``,
      login_password: ``,
      input_style: [
        `appearance-none`,
        `border`,
        `focus:outline-none`,
        `focus:shadow-outline`,
        `leading-tight`,
        `mb-5`,
        `px-3`,
        `py-2`,
        `rounded`,
        `shadow`,
        `text-gray-700`,
        `w-full`
      ],
      label_style: [
        `block`,
        `font-bold`,
        `mb-5`,
        `ml-3`,
        `text-gray-700`,
        `text-sm`
      ],
      submit_style: [
        `bg-blue-500`,
        `focus:outline-none`,
        `focus:shadow-outline`,
        `font-bold`,
        `hover:bg-blue-700`,
        `mb-5`,
        `ml-3`,
        `px-4`,
        `py-2`,
        `rounded`,
        `text-white`
      ]
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
