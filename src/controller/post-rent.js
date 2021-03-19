export default function makePostRent ({ placeRent }) {
  return async function postRent (httpRequest) {
    try {
      const { ...rentInfo } = httpRequest.body

      const posted = await placeRent({
        ...rentInfo
      })
      return {
        headers: {
          'Content-Type': 'application/json'
        //   'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { posted }
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
