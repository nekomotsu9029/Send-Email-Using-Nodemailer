const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'nekomotsu9029@gmail.com', // generated ethereal user
      pass: 'iathkccyktbbazrl', // generated ethereal password
    },
  })

//input || const {email, subject, body} = req.body;
//output || {state, message}
router.post('/api/sendEmail', async (req, res)=>{
    const {email, subject, body} = req.body;
    try{
        await transporter.sendMail({
            from: '"Example | I send mail with nodemailer" <nekomotsu9029@gmail.com>', // generated ethereal
            to: email,
            subject,
            html: `<h1>Hello!</h1><br><b><small>${body}</small><b>`
        })
        res.json({
            success: true,
            message: `The email was sent to ${email} successfully :)`
        })
    }catch(err){
        console.log('The email could nor be sent :(');
        console.log('ERROR: '+err);
        res.json({
            success: false,
            message: 'The email could nor be sent :('
        })
    }
})


module.exports = router;