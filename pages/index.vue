<template>
  <div>
    <Header />
    <div class="container mx-auto">
      {{ msg }}
      <form>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Password Confimation" />
        <button type="submit">Register</button>
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
      msg: 'Under Maintenance'
    }
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
