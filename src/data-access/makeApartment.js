export default function buildMakeApartmentDb ({ makeDb }) {
  return Object.freeze({
    getAllApartments,
    getApartment,
    insertApartment,
    updateApartment,
    getRenterApartments
  })

  async function getApartment ({ id }) {
    let db = await makeDb()
    let foundApartment = await db.collection('apartments').findOne({ id })
    return foundApartment
  }
  async function getRenterApartments (query) {
    let db = await makeDb()
    let foundApartment = await db.collection('apartments').find(query)
    let toArray = await foundApartment.toArray()
    return toArray
  }
  async function updateApartment ({ id, ...details }) {
    let db = await makeDb()
    let updatedApartment = await db.collection('apartments').updateOne({ id }, { $set: { ...details } })
    if (updatedApartment.modifiedCount > 0) {
      return { id, ...details }
    } else {
      return { id, ...details }
    }
  }
  async function getAllApartments () {
    let db = await makeDb()
    let allApartments = await db.collection('apartments').find({ })
    let allRenters = await db.collection('renters').find({ })

    let apartments = await allApartments.toArray()
    let renters = await allRenters.toArray()
    apartments.forEach(apartment => {
      renters.forEach(renter => {
        if (apartment.renterId === renter.id) {
          apartment.renter = renter
        }
      })
    })
    return apartments
  }
  async function insertApartment (apartmentDetails) {
    let db = await makeDb()
    let insertedApartment = await db.collection('apartments').insertOne({ ...apartmentDetails })
    return insertedApartment.ops[0]
  }
}
