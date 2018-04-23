/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Event = db.model('event')

describe('event routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/event/', () => {

    beforeEach(() => {
      return event.create({
        title: 'test1',
        date: '11-02-2018',
        start: '10:00AM',
        end: '10:30AM'
      })
    })

    it('GET /api/event', () => {
      return request(app)
        .get('/api/event')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].title).to.be.equal('test')
        })
    })
  }) 
}) 
