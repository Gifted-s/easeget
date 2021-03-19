import { renters } from '../../data-access'

const { default: buildAddRenter } = require('./addRenter')
const { default: buildEditRenter } = require('./editRenter')
const { default: buildGetRenter } = require('./getRenter')
const { default: buildGetRenters } = require('./getRenters')
let addRenter = buildAddRenter({ renters })
let editRenter = buildEditRenter({ renters })
let getRenters = buildGetRenters({ renters })
let getRenter = buildGetRenter({ renters })
export {
  addRenter,
  editRenter,
  getRenter,
  getRenters
}
