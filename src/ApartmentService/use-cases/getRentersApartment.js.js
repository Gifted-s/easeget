export default function makeGetRenterApartment ({ apartments }) {
  return async function getRenterApartment ({ renterId }) {
    if (!renterId) {
      throw new Error('renter id is required')
    }
    let apartmentExist = await apartments.getRenterApartments({ renterId })
    return apartmentExist
  }
}
