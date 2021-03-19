export default function signup ({ addRenter, sendNotification, bcrypt }) {
  return async (req, res) => {
    const OTP = `${Math.floor(Math.random() * 9)}` + `${Math.floor(Math.random() * 6)}` + `${Math.floor(Math.random() * 5)}` + `${Math.floor(Math.random() * 7)}`
    try {
      console.log(OTP)
      sendNotification.sendOTP(OTP, req.body.phoneNumber, async function (err, success) {
        if (err) {
          return res.status(400).send({ error: err })
        }
        let addedUser = await addRenter({ ...req.body, password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(5), null), userToken: OTP })
        if (addedUser._id) {
          return res.status(201).send({ status: 'success', renterId: addedUser.id })
        }
      })
    } catch (err) {
      return res.status(400).send({ error: err.message })
    }
  }
}
