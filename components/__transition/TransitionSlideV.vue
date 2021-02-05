<template>
  <transition name="slide">
    <slot />
  </transition>
</template>

<script>
  export default {
    name: 'TransitionSlideV'
  }
</script>

<style lang="scss" scoped>
  .slide-enter-active {
    animation: slide 0.3s ease-out;
  }

  .slide-leave-active {
    animation: slide 0.3s ease-in reverse;
  }

  @keyframes slide {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
