import sanitizeHtml from 'sanitize-html'
import buildMakeApartment from './apartment'
import cuid from 'cuid'
let Id = Object.freeze({
  makeId: cuid
})
let makeApartment = buildMakeApartment({ sanitizeHtml: sanitize, Id })

function sanitize (text) {
  // TODO: allow more coding embeds
  return sanitizeHtml(text, {
    allowedIframeHostnames: ['codesandbox.io', 'repl.it']
  })
}
export default  makeApartment