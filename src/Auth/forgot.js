export default function forgot ({ bcrypt, editRenter, getRenter, sendNotification, apiValidation, getRenterApartment }) {
  return async (req, res) => {
    const OTP = `${Math.floor(Math.random() * 9)}` + `${Math.floor(Math.random() * 6)}` + `${Math.floor(Math.random() * 5)}` + `${Math.floor(Math.random() * 7)}`
    console.log(OTP)
    try {
      if (!req.body.phoneNumber) {
        return res.status(400).send({ error: 'phone number is required' })
      }
      let renter = await getRenter({ phoneNumber: req.body.phoneNumber })
      if (!renter) {
        return res.status(400).send({ error: 'renter is not registerd try to signup' })
      } else {
        sendNotification.sendOTP(OTP, req.body.phoneNumber, async function (err, success) {
          if (err) {
            return res.status(400).send({ error: err })
          } else {
            let updatedRenter = await editRenter({ ...renter, phoneNumber: req.body.phoneNumber, password: bcrypt.hashSync(OTP, bcrypt.genSaltSync(5), null) })
            getRenterApartment({ renterId: renter.id }).then(renterApartments => {
              updatedRenter.apartments = renterApartments
              let token = apiValidation.generateToken(updatedRenter)
              return res.status(200).send({ status: 'success', message: 'A new password has been sent to ' + req.body.phoneNumber, token })
            })
          }
        })
      }
    } catch (err) {
      return res.status(400).send({ error: err.message })
    }
  }
}
