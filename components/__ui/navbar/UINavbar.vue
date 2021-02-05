<template>
  <div class="navbar">
    <div class="navbar__container">
      <UiNavbarBrand />
      <UiSearch />
      <a class="navbar__container__item" @click="categoryShow = !categoryShow">
        Category
      </a>
      <NuxtLink class="navbar__container__item" to="/"> Login </NuxtLink>
      <UiButton :is-outlined="true" :is-white="true">Get Started</UiButton>
      <UiNavbarCategory :is-show="categoryShow" />
    </div>
  </div>
</template>

<script>
  import UiButton from '@/components/__ui/button/UiButton'
  import UiSearch from '@/components/__ui/search/UiSearch'
  import UiNavbarBrand from './UiNavbarBrand'
  import UiNavbarCategory from './UiNavbarCategory'

  export default {
    components: {
      UiNavbarBrand,
      UiNavbarCategory,
      UiButton,
      UiSearch
    },
    data() {
      return {
        categoryShow: false
      }
    }
  }
</script>

<style lang="scss">
  .navbar {
    min-height: 12.5vh;
    width: 100%;
    background-color: #1da1f2;
    padding: 2vw;
    &__container {
      width: 100%;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__item {
        color: #ffffff;
        text-decoration: none;
        font-size: 1.75em;
        flex-grow: 1;
        text-align: center;
        cursor: pointer;
      }
    }
  }
</style>
