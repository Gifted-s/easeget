export default function buildMakeRenterDb ({ makeDb }) {
  return Object.freeze({
    findRenters,
    findRenter,
    addRenter,
    editRenter
  })

  async function findRenter (query) {
    let db = await makeDb()
    let foundRenter = await db.collection('renters').findOne(query)
    if (!foundRenter) {
      return null
    }
    let allApartments = await db.collection('apartments').find({ renterId: foundRenter.id })
    let allAptToArrary = await allApartments.toArray()
    foundRenter.apartments = allAptToArrary
    return foundRenter
  }
  async function editRenter ({ id, ...details }) {
    let db = await makeDb()
    let updatedRenter = await db.collection('renters').updateOne({ id }, { $set: { ...details } })
    if (updatedRenter.modifiedCount > 0) {
      return { id, ...details }
    } else {
      return { id, ...details }
    }
  }
  async function findRenters () {
    let db = await makeDb()
    let allRenters = await db.collection('renters').find({ })
    let renters = await allRenters.toArray()
    return renters
  }
  async function addRenter (renterDetails) {
    let db = await makeDb()

    let insertedRenter = await db.collection('renters').insertOne({ ...renterDetails })
    return insertedRenter.ops[0]
  }
}
