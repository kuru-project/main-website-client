<template>
  <div>
    <Header />
    <div class="container mx-auto">
      <form>
        <input placeholder="Email" @model="email" />
        <input type="password" placeholder="Password" @model="password" />
        <input
          type="password"
          placeholder="Password"
          @model="password_confirmation"
        />
        <button type="submit" @click="register">Register</button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
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
    register: () => {}
  }
  // axios.post('http://api.kuru-anime.com/', {
  //   email: '...',
  //   password: '...',
  //   password_confirmation: '...'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}
</script>
