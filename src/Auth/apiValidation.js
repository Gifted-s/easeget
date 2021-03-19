import jwt from 'jsonwebtoken'
const apiValidation = {
  generateToken: (payload) => {
    return jwt.sign(payload, '12345', { expiresIn: '60d' })
  },
  validateToken: (authorizationToken, callback) => {
    jwt.verify(authorizationToken, '12345', (err, payload) => {
      if (err) {
        return callback(err)
      }
      return callback(null, payload)
    })
  }
}

export default apiValidation
