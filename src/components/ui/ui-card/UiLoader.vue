<template>
  <div class="uiLoader">
    <label for="uploadbtn" class="uploadButton">Select photo</label>
    <input style="opacity: 0; z-index: -1;" type="file" @change="uploadImage" id="uploadbtn">
  </div>
</template>

<script>
export default {
  methods: {
    uploadImage (e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.$emit('img-select', e.target.result)
      }
    }
  }
}
</script>

<style scoped lang="sass">
  .uiLoader img
    width: 150px
    border-radius: 50%
    display: flex
    margin-bottom: 20px
  .uploadButton
    margin-left: 10px
    margin-top: 3px
    display: block
    width: 100px
    background: #0084FF
    padding: 10px 20px
    color: #FFF
    text-align: center
    border-radius: 6px
    cursor: pointer
  .uploadButton:hover
    background: #3ea1fe
</style>
