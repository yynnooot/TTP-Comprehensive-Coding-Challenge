const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

// api/event

// get all events
router.get('/', (req, res, next) => {
  Event.findAll()
    .then(events => res.json(events))
    .catch(next)
})

// create single event
router.post('/', (req, res, next) => {
  Event.create(req.body)
    .then(newEvent => res.json(newEvent))
    .catch(next)
})

// update single event with :id
router.put('/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => event.update(req.body))
    .then(updatedEvent => res.json(updatedEvent))
    .catch(next)
})

// delete single event with :id
router.delete('/:id', (req, res, next) => {
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.send('event successfully deleted'))
    .catch(next)
})

