<template>
  <table class="table-api">
    <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Price</th>
      <th>Volume(24h)</th>
      <th>Data added</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="coin in coins" :key="coin.id">
      <td>{{ coin.symbol }}</td>
      <td>{{ coin.name }}</td>
      <td>{{ coin.quote.USD.price }}</td>
      <td>{{ coin.quote.USD.volume_24h }}</td>
      <td>{{ coin.date_added.split('').splice(0,10).join('')}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      coins: [],
      coinData: {}
    }
  },
  created: function () {
    this.getCoins()
  },
  methods: {
    getCoins: function () {
      axios.get('http://localhost:3003/')
        .then((response) => {
          this.coins = response.data.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="sass">
.table-api
  width: 96%
  border-collapse: collapse
.table-api thead
  font-size: 14px
.table-api th
  color: #9999
  padding-left: 25px
.table-api tr
  text-align: left
.table-api td
  font-size: 16px
  border-radius: 2px
  padding-left: 25px
  text-align: left
  padding-top: 20px
  padding-bottom: 20px
  background-color: white
  border: none
  margin-top: 10px
  border-top: 20px solid #f5f8fd
</style>
