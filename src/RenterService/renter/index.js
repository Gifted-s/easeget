import sanitizeHtml from 'sanitize-html'
import cuid from 'cuid'
const { default: buildMakeRenter } = require('./renter')
let Id = Object.freeze({
  makeId: cuid
})
let makeRenter = buildMakeRenter({ sanitizeHtml: sanitize, Id })

function sanitize (text) {
  // TODO: allow more coding embeds
  return sanitizeHtml(text, {
    allowedIframeHostnames: ['codesandbox.io', 'repl.it']
  })
}
export default makeRenter
