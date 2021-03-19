export default function buildMakeApartment ({ sanitizeHtml, Id }) {
  return function makeApartment ({
    id = Id.makeId(),
    description,
    price,
    priceNegotiable,
    address,
    renterId,
    imageUrls = [],
    isAvailable,
    dateAdded = Date.now(),
    dateModified = Date.now()
  }) {
    if (!description) {
      throw new Error('apartment must have a description')
    }
    if (description.length < 10) {
      throw new Error('description must not be less than 10 characters')
    }
    if (typeof price !== 'number') {
      throw new Error('price must be a number')
    }
    if (!price) {
      throw new Error('apartment must have a price')
    }
    if (typeof priceNegotiable !== 'boolean') {
      throw new Error('priceNegotiable must be a boolean value ')
    }
    if (!address) {
      throw new Error('apartment must have an address ')
    }
    if (typeof address !== 'string') {
      throw new Error('address must be a string ')
    }
    if (!address) {
      throw new Error('apartment must have an address ')
    }
    if (!renterId) {
      throw new Error('apartment must have a renterId ')
    }
    if (typeof renterId !== 'string') {
      throw new Error('renterId must be a string ')
    }
    if (typeof isAvailable !== 'boolean') {
      throw new Error('isAvailable must be a boolean value ')
    }

    return Object.freeze({
      getId: () => id,
      getDescription: () => sanitizeHtml(description),
      getPrice: () => price,
      getPriceNegotiable: () => priceNegotiable,
      getAddress: () => sanitizeHtml(address),
      getRenterId: () => renterId,
      getImageUrls: () => imageUrls,
      getIsAvailable: () => isAvailable,
      getDateAdded: () => dateAdded,
      getModifiedOn: () => dateModified
    })
  }
}
