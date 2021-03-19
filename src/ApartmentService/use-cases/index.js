import { apartments } from '../../data-access'
import makeGetRenterApartment from './getRentersApartment.js'

const { default: makePlaceRent } = require('./placeRent')
const { default: makeUpdateApartment } = require('./updateApartment')
const { default: makeGetAllApartment } = require('./getAllApartments')

let placeRent = makePlaceRent({ apartments })
let updateApartment = makeUpdateApartment({ apartments })
let getAllApartments = makeGetAllApartment({ apartments })
let getRenterApartment = makeGetRenterApartment({ apartments })
let services = Object.freeze({
  placeRent,
  getRenterApartment,
  updateApartment,
  getAllApartments
})
export default services
