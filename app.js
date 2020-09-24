const express = require('express');
const { urlencoded } = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on port 8080')
})