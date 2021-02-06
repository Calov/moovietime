<template>
  <div class="ui-card">
    <img class="ui-card__poster" :src="img" :alt="title" />
    <div class="ui-card__label">
      <p>{{ title }}</p>
      <div class="ui-card__label__rating">
        <img
          v-for="index in star(rating)"
          :key="index"
          class="ui-card__label__rating__star"
          src="./star.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: 'ini isinya judul'
      },
      rating: {
        type: Number,
        default: 0
      }
    },
    methods: {
      star(rating) {
        return Math.round(rating / 2)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-card {
    padding: 0 2%;
    display: flex;
    justify-content: center;
    position: relative;
    &__poster {
      width: 100%;
      border-radius: 10px;
    }
    &__label {
      background: rgba(0, 0, 0, 0.5);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      position: absolute;
      bottom: 0;
      width: 96%;
      padding: 0.4em 0 0.25em;
      &__rating {
        display: flex;
        justify-content: center;
        &__star {
          width: 18px;
          margin: 0.5em 0.25em;
        }
      }
      p {
        color: #ffffff;
        text-align: center;
        margin: 0;
      }
    }
  }
</style>
