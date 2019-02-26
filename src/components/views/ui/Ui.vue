<template>
  <div class="uiLayout">
    <p>UI components</p>
    <div class="ui-main">
      <div class="ui-item">
        <UiInput placeholder="Name" title="Input - empty" :disabled="true">Name</UiInput>
        <UiInput placeholder="Name" title="Input - focus / not empty" :disabled="true">Name</UiInput>
        <UiInput placeholder="Name" title="Input - disabled" :disabled="false">Name</UiInput>
      </div>
      <div class="ui-item">
        <UiSelect title="Select - empty" :disabled="true">Name</UiSelect>
        <UiSelect title="Select - focus" :options="['Item 01','Item 02','Item 03','Item 04','Item 05']" v-model="test" :disabled="true">Name</UiSelect>
        <UiSelect title="Select - disabled" :options="['Item 01','Item 02','Item 03','Item 04','Item 05']" :disabled="false">Name</UiSelect>
      </div>
      <div class="ui-item">
        <UiButton title="Button - normal" :onClick="consoleClickNormal" :disabled="true">Button</UiButton>
        <UiButton title="Button - hover" :onClick="consoleClickHover" :disabled="true">Button</UiButton>
        <UiButton title="Button - disabled" :onClick="consoleClickDisabled" :disabled="false" >Button</UiButton>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/ui/ui-button/UiButton'
import UiInput from '@/components/ui/ui-input/UiInput'
import UiSelect from '@/components/ui/ui-tabs/UiSelect'

export default {
  data () {
    return {
      value: '',
      value1: '',
      test: ''
    }
  },
  components: {
    UiButton,
    UiInput,
    UiSelect
  },
  methods: {
    consoleClickNormal () {
      console.log('Button clicked')
    },
    consoleClickHover () {
      console.log('hover button clicked')
    },
    consoleClickDisabled () {
      console.log('disabled button clicked')
    }
  }
}
</script>

<style scoped lang="sass">
  .ui-item
    display: flex
    background-color: white
    padding: 20px
    width: 100%
  .ui-all
    margin-right: 30px
  .uiLayout p
    font-size: 20px
    margin-bottom: 40px
  .content-btn-hover
    margin-right: 30px
</style>
