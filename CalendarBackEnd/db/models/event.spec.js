const {expect} = require('chai')
const db = require('../index')
const Event = db.model('event')

describe('event model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

}) // end describe('User model')
