<template>
  <div>
    <UiNavbar />
    <Nuxt />
    <UiFooter />
  </div>
</template>

<script>
  import UiNavbar from '@/components/__ui/navbar/UiNavbar'
  import UiFooter from '@/components/__ui/footer/UiFooter'

  export default {
    components: {
      UiNavbar,
      UiFooter
    }
  }
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
