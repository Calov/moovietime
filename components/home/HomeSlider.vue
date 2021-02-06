<template>
  <section class="home-playing">
    <h1 class="home-playing__title">NOW PLAYING</h1>
    <UiCarousel>
      <slide v-for="result in computedResults" :key="result.id">
        <div class="img-wrap">
          <UiCard
            :img="'http://image.tmdb.org/t/p/w200' + result.poster_path"
            :title="result.title"
            :rating="result.vote_average"
          />
          <!-- <img
              :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
              class="img-fluid poster"
              alt=""
            /> -->
        </div>
      </slide>
    </UiCarousel>
  </section>
</template>

<script>
  import UiCarousel from '@/components/__ui/carousel/UiCarousel'
  import UiCard from '@/components/__ui/card/UiCard'

  export default {
    name: 'HomePlaying',
    components: {
      UiCarousel,
      UiCard
    },
    computed: {
      computedResults() {
        return this.$store.getters.getMovieResults
      }
    },
    created() {
      this.getResults()
    },
    methods: {
      async getResults() {
        await this.$store.dispatch('requestMovieResults')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .home-playing {
    &__title {
      text-align: center;
      font-size: 28px;
      color: #6c757d;
      margin: 1.5em 0 0.75em;
    }
  }
</style>
