const rp = require('request-promise')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

app.get('/', function (req, res) {
  rp(requestOptions)
    .then(response => {
      res.json(response).status(200)
    })
    .catch((err) => {
      res.json(err).status(500)
    })
})

app.listen(3003, function () {
  console.log('Example app listening on port 3003!')
})
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    start: 1,
    limit: 5,
    convert: 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '59ae650e-bc28-4ce9-8622-62e74567cefa'
  },
  json: true,
  gzip: true
}
