export default function makeFetchRenters ({ getRenters }) {
  return async function fetchRenters (httpRequest) {
    try {
      const renters = await getRenters()
      return {
        headers: {
          'Content-Type': 'application/json'
          //   'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { renters }
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
