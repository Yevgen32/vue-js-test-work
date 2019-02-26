<template>
  <div class="ui-all">
    <p>{{title}}</p>
    <label>
      <select class="select-ui"
              v-model="selected"
              @change="updateValue"
              :disabled="!disabled"
      >
        <option value="" disabled hidden><slot></slot></option>
        <option  class="option-ui"
                v-for="option in options"
                :key="option"
                :value="option"
                v-text="option"></option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  model: {
    event: 'change'
  },
  props: {
    title: String,
    disabled: Boolean,
    options: Array,
    value: {
      type: [String, Number],
      default: 'Name'
    }
  },
  data () {
    return {
      showSpan: false,
      selected: this.value
    }
  },
  methods: {
    updateValue () {
      this.$emit('change', this.selected)
    }
  }
}
</script>

<style scoped lang="sass">
  .ui-all p
    margin-bottom: 20px
  .select-ui
    width: 248px
    height: 42px
    border-radius: 6px
    border: 1px solid #eaeaea
    padding-left: 15px
  .content-select
    position: relative
  .content-select span
    position: absolute
    margin-left: 14px
    margin-top: -6px
    background-color: white
    padding: 2px 5px
    font-size: 12px
    border-radius: 3px
    color: #0084ff
</style>
