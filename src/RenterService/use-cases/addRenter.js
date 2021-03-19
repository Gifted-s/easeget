import makeRenter from '../renter'

export default function buildAddRenter ({ renters }) {
  return async function addRenter ({
    ...renterInfo
  }) {
    let renter = makeRenter({ ...renterInfo })
    let renterExist = await renters.findRenter({ phoneNumber: renter.getPhoneNumber() })
    if (renterExist) {
      console.log(renterExist)
      throw new Error('renter already exist try to login')
    }
    let addedRenter = await renters.addRenter({
      id: renter.getId(),
      firstName: renter.getfirstName(),
      lastName: renter.getLastName(),
      phoneNumber: renter.getPhoneNumber(),
      userToken: renter.getUserToken(),
      password: renter.getPassword(),
      dateAdded: renter.getDateAdded(),
      dateModified: renter.getDateModified()
    })

    return addedRenter
  }
}
