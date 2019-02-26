<template>
  <div id="app">
    <MainLayout></MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout'
export default {
  name: 'app',
  components: {
    MainLayout
  }
}
</script>

<style lang="sass">
  @import "assets/fonts/flaticon.css"
  @font-face
    font-family: "Roboto"
    src: url("assets/fonts/Roboto-Regular.ttf") format("ttf")
  @font-face
    font-family: "Josefin Sans"
    src: url("assets/fonts/JosefinSans-Regular.ttf") format("ttf")
</style>
