<template>
  <div class="container">
    <HomeSlider />
    <HomePartners />
  </div>
</template>

<script>
  import HomeSlider from '@/components/home/HomeSlider'
  import HomePartners from '@/components/home/HomePartners'

  export default {
    components: {
      HomeSlider,
      HomePartners
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
  }
</style>
