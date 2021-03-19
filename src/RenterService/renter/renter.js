export default function buildMakeRenter ({ Id, sanitizeHtml }) {
  return function makeRenter ({
    id = Id.makeId(),
    firstName,
    lastName,
    phoneNumber,
    userToken,
    password,
    dateAdded = Date.now(),
    dateModified = Date.now()
  } = {}) {
    if (!firstName) {
      throw new Error('renter must have a first name')
    }
    if (!lastName) {
      throw new Error('renter must have a last name')
    }
    if (!phoneNumber) {
      throw new Error(' renter must have a phone humber')
    }
    if (!password) {
      throw new Error('renter must have a password')
    }
    return Object.freeze({
      getId: () => id,
      getfirstName: () => sanitizeHtml(firstName),
      getLastName: () => sanitizeHtml(lastName),
      getPassword: () => password,
      getPhoneNumber: () => phoneNumber,
      getUserToken: () => userToken,
      getDateAdded: () => dateAdded,
      getDateModified: () => dateModified
    })
  }
}
