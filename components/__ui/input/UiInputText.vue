<template>
  <div class="input-group">
    <label :for="inputId">{{ inputLabel }}</label>
    <input
      :disabled="isDisabled"
      :readonly="isReadonly"
      :value="value"
      class="input-control"
      type="text"
      :placeholder="placeholder"
      @blur="$emit('touch')"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
  export default {
    name: 'UiInputText',
    props: {
      value: {
        type: String,
        default: ''
      },
      inputLabel: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: 'Silahkan diisi text'
      },
      inputId: {
        type: String,
        default: ''
      },
      isReadonly: {
        type: Boolean,
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .input-group {
    margin-bottom: 0;
    .input-control {
      display: block;
      width: 100%;
      height: 45px;
      border-radius: 10px;
      border: none;
      padding: 10px;
      outline: none;
      font-size: 18px;
      margin-bottom: 5px;
    }
  }
</style>
