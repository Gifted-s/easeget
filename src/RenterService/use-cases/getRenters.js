
export default function buildGetRenters ({ renters }) {
  return async function getRenters () {
    let allRenter = await renters.findRenters()
    return allRenter
  }
}
