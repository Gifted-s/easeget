import makeApartment from '../apartment'

export default function makePlaceRent ({ apartments }) {
  return async function placeRent ({ ...rentDetails }) {
    let rent = makeApartment(rentDetails)
    let apartmentExist = await apartments.getApartment({ id: rent.getId() })
    if (apartmentExist) {
      throw new Error('apartment already exist')
    }

    let placedRent = await apartments.insertApartment({
      id: rent.getId(),
      description: rent.getDescription(),
      price: rent.getPrice(),
      priceNegotiable: rent.getPriceNegotiable(),
      address: rent.getAddress(),
      renterId: rent.getRenterId(),
      imageUrls: rent.getImageUrls(),
      isAvailable: rent.getIsAvailable(),
      dateAdded: rent.getDateAdded(),
      dateModified: rent.getModifiedOn()
    })

    return placedRent
  }
}
