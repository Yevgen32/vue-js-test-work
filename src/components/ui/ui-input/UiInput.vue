<template>
  <div class="ui-all">
    <p>{{title}}</p>

  <div class="ui-input-item">
    <input :disabled="!disabled"
           class="item-input"
           type="text"
           :value="value"
           @input="updateSelf($event.target.value)"
           id="input-component"
           required
    >
    <label class="item-label"><slot></slot></label>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    disabled: Boolean,
    value: String
  },
  methods: {
    updateSelf (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="sass">
  .ui-all p
    margin-bottom: 20px
  .ui-input-item
    display: inline-block
    vertical-align: top
    position: relative
  .item-input
    width: 230px
    height: 40px
    border-radius: 6px
    border: 1px solid #eaeaea
    padding-left: 15px
  .item-label
    position: absolute
    pointer-events: none
    left: 15px
    top: 10px
    line-height: 20px
    -webkit-transition: 0.3s
    transition: 0.3s
  .item-input:focus~.item-label,
  .item-input:not(:focus):valid~.item-label
    top: -10px
    font-size: 14px
    background-color: white
    padding: 2px 5px
    color: #0084ff
    height: 50%
</style>
