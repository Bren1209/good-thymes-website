const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}

const transporter = nodeMailer.createTransport(mailGun(auth));

const sendMail = (name, email, enquiry, callback) => {
    const mailOptions = {
        from: email,
        to: 'priscilla.mulligan56@gmail.com',
        subject: name,
        text: enquiry
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}

module.exports = sendMail;