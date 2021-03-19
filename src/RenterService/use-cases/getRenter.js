
export default function buildGetRenter ({ renters }) {
  return async function getRenter (query) {
    let renter = await renters.findRenter(query)
    return renter
  }
}
