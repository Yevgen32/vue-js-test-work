<template>
  <div class="container">
    <appHeader></appHeader>
    <div id="po"></div>
    <sidebar></sidebar>
    <main id="pageMain">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import appHeader from '@/components/layouts/app-header/header'
import sidebar from '@/components/layouts/sidebar/sidebar'

export default {
  components: {
    appHeader,
    sidebar
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html {
    background-color: #f5f8fd
  }
  .container {
    display: grid;
    grid-template-areas:
      "po header"
      "nav main";
    grid-template-rows: 100px 1fr;
    grid-template-columns: 100px 1fr;
    height: 100vh;

    background-color: #f5f8fd
  }
  #pageMain {
    grid-area: main;
  }
  #po {
    grid-area: po;
    background-color: white;
    border-right: 1px solid #e9ecf1;
  }
  main {
    padding: 5% 6%;
  }
</style>
