import makeRenter from '../renter'

export default function buildEditRenter ({ renters }) {
  return async function editRenter ({
    ...updateDetails
  }) {
    let renterExists = renters.findRenter({ phoneNumber: updateDetails.phoneNumber })
    if (!renterExists) {
      throw new Error('no renter this id')
    }
    let updatedRenter = makeRenter({ ...renterExists, ...updateDetails, dateModified: undefined })
    let updateResult = await renters.editRenter({
      id: updatedRenter.getId(),
      firstName: updatedRenter.getfirstName(),
      lastName: updatedRenter.getLastName(),
      phoneNumber: updatedRenter.getPhoneNumber(),
      userToken: updatedRenter.getUserToken(),
      password: updatedRenter.getPassword(),
      dateAdded: updatedRenter.getDateAdded(),
      dateModified: updatedRenter.getDateModified()
    })
    return updateResult
  }
}
