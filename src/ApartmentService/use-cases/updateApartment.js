const { default: makeApartment } = require('../apartment')
export default function makeUpdateApartment ({ apartments }) {
  return async function updateApartment ({ ...updateDetails }) {
    if (!updateDetails.id) {
      throw new Error('id must be provided')
    }
    let apartmentExist = await apartments.getApartment({ id: updateDetails.id })
    if (!apartmentExist) {
      throw new Error('No apartment with this id')
    }
    if (updateDetails._id !== apartmentExist._id.toString()) {
      throw new Error('House validation error, you are trying to use another HOUSE ID')
    }
    if (!apartmentExist.isAvailable) {
      throw new Error('This apartment is no longer available')
    }
    let newApartment = makeApartment({ ...apartmentExist, ...updateDetails, dateModified: undefined })
    let updatedApartment = await apartments.updateApartment({
      id: newApartment.getId(),
      description: newApartment.getDescription(),
      price: newApartment.getPrice(),
      priceNegotiable: newApartment.getPriceNegotiable(),
      address: newApartment.getAddress(),
      renterId: newApartment.getRenterId(),
      imageUrls: newApartment.getImageUrls(),
      isAvailable: newApartment.getIsAvailable(),
      dateAdded: newApartment.getDateAdded(),
      dateModified: newApartment.getModifiedOn()
    })
    console.log(updatedApartment)
    return updatedApartment
  }
}
