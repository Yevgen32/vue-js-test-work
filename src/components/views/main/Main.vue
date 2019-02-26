<template>
  <div class="table">
    <p>Home</p>
    <tableApi></tableApi>
  </div>
</template>

<script>
import tableApi from '@/components/api/tableApi'
export default {
  components: {
    tableApi
  }
}
</script>

<style scoped lang="sass">
  main p
    font-size: 20px
    margin-bottom: 40px
</style>
