export default function makePostRenter ({ addRenter }) {
  return async function postRenter (httpRequest) {
    try {
      const { ...renterInfo } = httpRequest.body

      const posted = await addRenter({
        ...renterInfo
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
