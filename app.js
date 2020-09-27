const express = require('express');
const { urlencoded } = require('express');
const sendMail = require('./public/scripts/mail.js')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
var date = new Date().getFullYear()
require('dotenv').config()


const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(flash())
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('express-session')({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  res.render('index', {currentYear: date, messageErr: req.flash('error'), messageSucc: req.flash('success')});
})

app.post('/contact', (req, res) => {
  const name = req.body.name.trim()
  const email = req.body.email.trim()
  const enquiry = req.body.enquiry.trim()

  sendMail(name, email, enquiry, function(err){
      if(err){
          req.flash('error', 'Woops. Something went wrong - Please try again or contact us directly.')
          res.redirect('/')
      } else {
          if(name){
              req.flash('success', "Thanks " + name + "! We'll get back to you soon.")
              res.redirect('/')
          } else {
              req.flash('success', "Thanks! We'll get back to you soon.")
              res.redirect('/')
          }
      }
  });
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on port 8080')
})