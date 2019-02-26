<template>
  <div class="ui-all">
    <p>{{title}}</p>
  <button :disabled="!disabled" class="button-hover"
          @click="onClick"
          type="submit"
  ><slot></slot></button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    nameButton: String,
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped lang="sass">
  .ui-all p
    margin-bottom: 20px
  .button-hover
    width: 140px
    border-radius: 6px
    background-color: #0084ff
    color: white
    border: none
    height: 40px
  .button-hover:hover
    background-color: #3ea1fe
  button[type="submit"]:disabled
    background: #ccc

</style>
