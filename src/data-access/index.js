import buildMakeApartmentDb from './makeApartment'
import buildMakeRenterDb from './makeRenterDb'

const { MongoClient } = require('mongodb')

let client = new MongoClient('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })

export async function makeDb () {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db('EasyBuyDb')
}

let apartments = buildMakeApartmentDb({ makeDb })
let renters = buildMakeRenterDb({ makeDb })
export { apartments }
export { renters }
