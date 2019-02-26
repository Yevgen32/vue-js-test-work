<template>
  <nav id="pageLeftSidebar">
      <router-link to="/"><span class="flaticon-home"></span></router-link>
      <router-link to="/ui"><span class="flaticon-list"></span></router-link>
      <router-link to="/profile"><span class="flaticon-avatar"></span></router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped lang="sass">
  nav
    background-color: white
    border-right: 1px solid #e9ecf1
  #pageLeftSidebar
    grid-area: nav
    display: flex
    flex-direction: column
  .router-link-exact-active
    color: #4ba8ff!important
    border-left: 3px solid #4ba8ff
  #pageLeftSidebar a
    padding-top: 2px
    padding-bottom: 2px
    color: #999999
    text-decoration: none
    text-align: center
    margin-top: 50px
    justify-content: center
</style>
