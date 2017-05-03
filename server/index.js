const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

const publicPath = path.join(__dirname, '..', 'public')
app.set('views', publicPath)
app.use(express.static(publicPath))
app.set('view engine', 'ejs')

app.get('/*', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
