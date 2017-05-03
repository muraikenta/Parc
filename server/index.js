const express = require('express')
const app = express()

app.set('views', '../public')
app.use(express.static('../public'))

app.get('/', (req, res) => {
  res.render('index.html')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
