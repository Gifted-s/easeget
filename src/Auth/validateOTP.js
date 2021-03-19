export default function validateToken ({ apiValidation, getRenter, getRenterApartment }) {
  return async (req, res) => {
    try {
      let { id } = req.params
      let { OTP } = req.body
      let renter = await getRenter({ id })
      let renterApartments = await getRenterApartment({ renterId: renter.id })
      renter.apartments = renterApartments
      if (renter.userToken !== OTP) {
        res.status(400).send({ error: 'OTP code invalid!' })
      } else {
        let token = apiValidation.generateToken(renter)
        console.log(renter)
        res.status(200).send({ status: 'success', renter, token })
      }
    } catch (err) {
      res.status(400).send({ error: err.message })
    }
  }
}
