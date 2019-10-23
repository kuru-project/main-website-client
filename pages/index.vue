<template>
  <div class="bg-gray-100 flex flex-col min-h-screen">
    <Header />
    <section class="flex-1">
      <div class="container mx-auto">
        <h4
          class="
            block
            font-bold
            mb-5
            ml-3
            text-gray-700
            text-sm
          "
        >
          Register
        </h4>
        <input
          v-model="register_email"
          class="
            appearance-none
            border
            focus:outline-none
            focus:shadow-outline
            leading-tight
            mb-5
            px-3
            py-2
            rounded
            shadow
            text-gray-700
            w-full
          "
          placeholder="Email"
        />
        <input
          v-model="register_password"
          class="
            appearance-none
            border
            focus:outline-none
            focus:shadow-outline
            leading-tight
            mb-5
            px-3
            py-2
            rounded
            shadow
            text-gray-700
            w-full
          "
          type="password"
          placeholder="Password"
        />
        <input
          v-model="register_password_confirmation"
          class="
            appearance-none
            border
            focus:outline-none
            focus:shadow-outline
            leading-tight
            mb-5
            px-3
            py-2
            rounded
            shadow
            text-gray-700
            w-full
          "
          type="password"
          placeholder="Password"
        />
        <button
          class="
            bg-blue-500
            focus:outline-none
            focus:shadow-outline
            font-bold
            hover:bg-blue-700
            mb-5
            ml-3
            px-4
            py-2
            rounded
            text-white
          "
          type="submit"
          @click="register"
        >
          Register
        </button>
      </div>
      <div class="container mx-auto">
        <h4
          class="
            block
            font-bold
            mb-5
            ml-3
            text-gray-700
            text-sm
          "
        >
          Login
        </h4>
        <input
          v-model="login_email"
          class="
            appearance-none
            border
            focus:outline-none
            focus:shadow-outline
            leading-tight
            mb-5
            px-3
            py-2
            rounded
            shadow
            text-gray-700
            w-full
          "
          placeholder="Email"
        />
        <input
          v-model="login_password"
          class="
            appearance-none
            border
            focus:outline-none
            focus:shadow-outline
            leading-tight
            mb-5
            px-3
            py-2
            rounded
            shadow
            text-gray-700
            w-full
          "
          type="password"
          placeholder="Password"
        />
        <button
          class="
            bg-blue-500
            focus:outline-none
            focus:shadow-outline
            font-bold
            hover:bg-blue-700
            mb-5
            ml-3
            px-4
            py-2
            rounded
            text-white
          "
          type="submit"
          @click="login"
        >
          Login
        </button>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Axios from 'axios'
import { createSnackbar } from '@snackbar/core'
import '@snackbar/core/dist/snackbar.css'
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
          createSnackbar(`You have logged in!`, {
            position: 'right'
          })
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error.response.data.errors)
          createSnackbar(`Something went wrong! Check your browser logs!`, {
            position: 'right'
          })
        })
    },
    register() {
      Axios.post(`${process.env.apiURL}auth/`, {
        email: this.register_email,
        password: this.register_password,
        password_confirmation: this.register_password_confirmation
      })
        .then(function(_response) {
          createSnackbar(`You have registered!`, {
            position: 'right'
          })
        })
        .catch(function(error) {
          // eslint-disable-next-line
          console.log(error.response.data.errors)
          createSnackbar(`Something went wrong! Check your browser logs!`, {
            position: 'right'
          })
        })
    }
  }
}
</script>
