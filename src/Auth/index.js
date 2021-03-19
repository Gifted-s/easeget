import validateToken from './validateOTP'
import signin from './signin'
import bcrypt from 'bcryptjs'
import apiValidation from './apiValidation'
import forgot from './forgot'
import services from '../ApartmentService/use-cases'
const { getRenterApartment } = services
const { default: signup } = require('./signup')
const { default: sendNotification } = require('../Notification/notification')
const { addRenter, getRenter, editRenter } = require('../RenterService/use-cases')
let signupHandler = signup({ addRenter, sendNotification, bcrypt })
let tokenValidationHandler = validateToken({ apiValidation, getRenter, getRenterApartment })
let signInHandler = signin({ getRenter, apiValidation, bcrypt, getRenterApartment })
let forgotHandler = forgot({ bcrypt, editRenter, getRenter, sendNotification, apiValidation, getRenterApartment })
export {
  signupHandler,
  tokenValidationHandler,
  signInHandler,
  forgotHandler
}
