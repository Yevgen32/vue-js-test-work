<template>
  <header id="pageHeader">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="">
    </router-link>
      <span>CoinMarketCap</span>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
  header
    padding: 20px
    background-color: white
    border-bottom: 1px solid #e9ecf1
    display: flex
  header span
    margin-left: 15px
    font-family: 'Josefin Sans', sans-serif
    font-size: 26px
  #pageHeader
    grid-area: header
    align-items: center
</style>
