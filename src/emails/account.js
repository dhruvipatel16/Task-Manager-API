const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhruvipatel1618@gmail.com',
        subject: 'Welcome to the App!',
        text: `Thanks for joining in, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhruvipatel1618@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometimes soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}