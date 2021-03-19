export default function signin ({ getRenter, apiValidation, bcrypt, getRenterApartment }) {
  return async (req, res) => {
    try {
      let { phoneNumber, password } = req.body
      if (!phoneNumber) {
        return res.status(400).send({ error: 'phone number is required' })
      } else if (!password) {
        return res.status(400).send({ error: 'password is required' })
      }
      let renter = await getRenter({ phoneNumber })
      if (!renter) {
        return res.status(200).send({ error: 'no renter with this phone number' })
      }
      const token = req.headers.authorization
      apiValidation.validateToken(token, (err, decoded) => {
        if (err) {
          return res.status(400).send({
            error: 'You have not validated this account, click forgot password to get a new password'
          })
        } else if (decoded.phoneNumber !== phoneNumber) {
          return res.status(400).send({
            error: 'It seems you are accessing your account from another device, go to switch account',
            id: renter.id

          })
        } else if (!bcrypt.compareSync(password, renter.password)) {
          return res.status(400).send({
            error: 'Invalid password'
          })
        } else {
          getRenterApartment({ renterId: renter.id }).then(apartments => {
            renter.apartments = apartments
            res.status(200).send({ status: 'success', renter })
          })
        }
      })
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}
