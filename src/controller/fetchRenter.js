export default function makeFetchRenter ({ getRenter }) {
  return async function fetchRener (httpRequest) {
    try {
      const { id } = httpRequest.params
      const renter = await getRenter({ id })
      return {
        headers: {
          'Content-Type': 'application/json'
          //   'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { renter }
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
