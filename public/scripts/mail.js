const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: 'key-a475b15ed9027e2326e419455cdeb178',
        domain: 'sandboxc1c183b6bbeb4782b07269a9c1d097b8.mailgun.org'
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