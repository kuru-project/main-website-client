<template>
  <header :class="header_style.join(' ')">
    <div class="container mx-auto py-3">
      <h1 class="font-bold text-xl">
        {{ site_title_symbole }}
      </h1>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');

header h1 {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      site_title_symbole: `${process.env.siteTitleSymbol}`,
      header_style: [
        `bg-kuru`,
        `border-b`,
        `border-kuru-dark`,
        `border-solid`,
        `mb-5`,
        `text-white`
      ]
    }
  }
}
</script>
