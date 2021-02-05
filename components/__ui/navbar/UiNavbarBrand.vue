<template>
  <div class="ui-navbar-brand">
    <NuxtLink class="ui-navbar-brand__logo" to="/">
      <img :src="logo" alt="Moovietime" />
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    name: 'NavbarBrand',

    data() {
      return {
        logo: require('./logo.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-navbar-brand {
    padding-top: 0.5em;
    &__logo {
      &:hover {
        img {
          transform: scale(1.025);
        }
      }

      img {
        max-height: 50px;
        transition: transform 0.2s ease-in-out;
      }
    }
  }
</style>
