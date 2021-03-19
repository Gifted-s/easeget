const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: 'd6b1165f',
  apiSecret: '7ujCLYkiqmAwCjil'
})

let sendNotification = {
  sendOTP: function (code, number, callback) {
    const from = 'Easy-get'
    const to = '234' + number.slice(1, number.length)
    const text = `EASY-GET OTP CODE: ${code} `

    nexmo.message.sendSms(from, to, text, (err, responseData) => {
      if (err) {
        console.log(err)
        return callback(err.message, null)
      } else {
        if (responseData.messages[0]['status'] === '0') {
          // success
          return callback(null, true)
        } else {
          console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`)
          return callback(responseData.messages[0]['error-text'])
        }
      }
    })
  }
}

export default sendNotification
