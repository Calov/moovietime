<template>
  <button
    :class="styleClass"
    :disabled="isDisabled"
    :type="buttonType"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'UiButton',

    props: {
      isWhite: { type: Boolean, default: false },
      isBlock: { type: Boolean, default: false },
      isMedium: { type: Boolean, default: false },
      isDisabled: { type: Boolean, default: false },
      isOutlined: { type: Boolean, default: false },
      isSmall: { type: Boolean, default: false },
      isRounded: { type: Boolean, default: false },
      buttonType: { type: String, default: 'button' }
    },

    computed: {
      styleClass() {
        return [
          'ui-button',
          {
            'ui-button--is-white': this.isWhite,
            'ui-button--is-block': this.isBlock,
            'ui-button--is-medium': this.isMedium,
            'ui-button--is-outlined': this.isOutlined,
            'ui-button--is-small': this.isSmall,
            'ui-button--is-rounded': this.isRounded
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ui-button {
    display: inline-block !important;
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: #1da1f2;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    min-height: 38px;
    color: #000000;
    font-size: 1.5em;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background-color: darken(#1da1f2, 2.5%);
      border-color: darken(#1da1f2, 2.5%);
    }

    &--is-block {
      width: 100%;
      display: block;
    }

    &--is-medium {
      font-size: 14px;
      min-height: 30px;
    }

    &--is-small {
      font-size: 12px;
      min-height: 24px;
    }

    &--is-white {
      background-color: #ffffff;
      border-color: #ffffff;
      color: #ffffff;

      &:hover {
        color: #1da1f2;
        background-color: #ffffff;
      }
    }

    &--is-outlined {
      background-color: transparent;
      border-width: 1.5px;
      border-style: solid;
    }

    &--is-rounded {
      border-radius: 20px;
    }

    &[disabled] {
      background-color: #ddd;
      border-color: #ddd;
      color: #777;
      cursor: not-allowed;
    }

    &:active,
    &:focus {
      outline: none;
    }
  }
</style>
