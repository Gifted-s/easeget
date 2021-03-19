export default function makeCallback (controller) {
  return (req, res) => {
    let httpRequest = {
      params: req.params,
      body: req.body
    }

    controller(httpRequest).then(httpResonse => {
      return res.status(httpResonse.statusCode).send(httpResonse.body)
    })
      .catch(err => {
        return res.status(500).send(err.message)
      })
  }
}
