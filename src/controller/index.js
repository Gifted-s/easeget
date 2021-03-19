import services from '../ApartmentService/use-cases'
import makeFetchAllApartment from './fetchApartments'
import makePostRent from './post-rent'
import makePatchApartment from './patchApartment'
import makePostRenter from './post-renter'
import makePatchRenter from './patchRenter'
import makeFetchRenter from './fetchRenter'
import makeFetchRenters from './fetch-renters'
import { addRenter, editRenter, getRenters, getRenter } from '../RenterService/use-cases'
let { getAllApartments, updateApartment, placeRent } = services

let fetchAllApartments = makeFetchAllApartment({ getAllApartments })
let patchApartment = makePatchApartment({ updateApartment })
let postRent = makePostRent({ placeRent })
let postRenter = makePostRenter({ addRenter })
let patchRenter = makePatchRenter({ editRenter })
let fetchRenter = makeFetchRenter({ getRenter })
let fetchRenters = makeFetchRenters({ getRenters })
export {
  fetchAllApartments,
  patchApartment,
  postRent,
  postRenter,
  patchRenter,
  fetchRenter,
  fetchRenters
}
