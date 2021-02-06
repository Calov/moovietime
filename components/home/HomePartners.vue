<template>
  <section class="home-partners">
    <h3 class="home-partners__title">PARTNER STUDIOS</h3>
    <div class="home-partners__list">
      <ul>
        <li>
          <img :src="xxi" alt="XXI" />
        </li>
        <li>
          <img :src="cgv" alt="CGV" />
        </li>
        <li>
          <img :src="blitz" alt="Blitz Megaplex" />
        </li>
        <li>
          <img :src="cinemaxx" alt="Cinemaxx" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        xxi: require('./xxi.png'),
        cgv: require('./cgv.png'),
        blitz: require('./blitz.png'),
        cinemaxx: require('./cinemaxx.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-partners {
    &__title {
      text-align: center;
      font-size: 28px;
      color: #6c757d;
      margin: 2em 0 0.75em;
    }
    &__list {
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          img {
            max-height: 65px;
          }
        }
      }
    }
  }
</style>
