<template>
  <header>
    <div class="container mx-auto">
      <h1>
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
      site_title_symbole: `${process.env.siteTitleSymbol}`
    }
  }
}
</script>
