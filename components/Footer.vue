<template>
  <footer class="bg-gray-700 mt-5">
    <div class="text-center text-white py-5">
      {{ site_title }} &copy; {{ current_year }}
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      site_title: `${process.env.siteTitle}`,
      current_year: new Date().getFullYear()
    }
  }
}
</script>
