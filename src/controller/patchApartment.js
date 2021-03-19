export default function makePatchApartment ({ updateApartment }) {
  return async function patchApartment (httpRequest) {
    try {
      const { ...updateInfo } = httpRequest.body
      const { id } = httpRequest.params
      const updated = await updateApartment({
        id,
        ...updateInfo

      })
      return {
        headers: {
          'Content-Type': 'application/json'
        //   'Last-Modified': new Date(posted.modifiedOn).toUTCString()
        },
        statusCode: 201,
        body: { updated }
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
