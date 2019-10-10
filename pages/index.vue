<template>
  <div>
    <Header />
    <div class="container mx-auto">
      I want you to be happier.
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
  }
}
</script>
