
export default function makeGetAllApartment ({ apartments }) {
  return async function getAllApartment () {
    let foundApartments = await apartments.getAllApartments()

    return foundApartments
  }
}
