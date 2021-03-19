import express from 'express'
import helmet from 'helmet'

import dotenv from 'dotenv'

import cors from 'cors'
import makeCallback from './express-callback/makeCallback'
import { postRent, patchApartment, fetchAllApartments, patchRenter, fetchRenters, fetchRenter } from './controller'
import { signupHandler, tokenValidationHandler, signInHandler, forgotHandler } from './Auth'
// import amp from 'elastic-apm-node'

dotenv.config()

const apiRoot = process.env.EG_API_ROOT
const app = express()
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.use(helmet())
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.use(cors())
const PORT = process.env.PORT || process.env.DEVPORT
// listen for requests
app.listen(PORT, () => {
  console.log(' server is listening on port ', PORT)
})

app.get('/', (req, res) => {
  res.send('server is listening')
})
app.get(`${apiRoot}/get-renter/:id`, makeCallback(fetchRenter))
app.get(`${apiRoot}/get-renters`, makeCallback(fetchRenters))
app.post(`${apiRoot}/edit-renter/:id`, makeCallback(patchRenter))
app.post(`${apiRoot}/signup`, signupHandler)
app.post(`${apiRoot}/signin`, signInHandler)
app.post(`${apiRoot}/validate-token/:id`, tokenValidationHandler)
app.get(`${apiRoot}/get-apartments`, makeCallback(fetchAllApartments))
app.post(`${apiRoot}/edit-apartment/:id`, makeCallback(patchApartment))
app.post(`${apiRoot}/post-rent`, makeCallback(postRent))
app.post(`${apiRoot}/forgot`, forgotHandler)
export default app
