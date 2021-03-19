export default function makeFetchAllApartment ({ getAllApartments }) {
  return async function fetchAllApartments (httpRequest) {
    try {
      const apartments = await getAllApartments()
      return {
        headers: {
          'Content-Type': 'application/json'
          //   'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { apartments }
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: e.message
        }
      }
    }
  }
}
