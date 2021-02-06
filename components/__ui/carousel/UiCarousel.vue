<template>
  <div class="ui-carousel">
    <carousel
      :per-page-custom="[
        [320, 1],
        [768, 5]
      ]"
      :pagination-enabled="false"
      :space-padding="0"
      :navigation-enabled="true"
      navigation-next-label=""
      navigation-prev-label=""
    >
      <slot></slot>
    </carousel>
  </div>
</template>

<style>
  .ui-carousel {
    width: 88%;
    margin: 0 auto;
  }
  .VueCarousel-navigation-next::after {
    content: url('./chevron-right.png');
    width: 30px;
  }
  .VueCarousel-navigation-prev::after {
    content: url('./chevron-left.png');
    width: 30px;
  }
  @media only screen and (max-width: 576px) {
    .VueCarousel-navigation-prev {
      transform: translate(15%, -50%) !important;
    }
    .VueCarousel-navigation-next {
      transform: translate(-15%, -50%) !important;
    }
  }
</style>
