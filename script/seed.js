const db = require('../server/db')
const {Event} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const events = await Promise.all([
    Event.create({date: '04/23/2018', title: 'Hire Tony Yoon', description: 'Front-End Engineer with UX and Fullstack Javascript Proficiency', start: '', end: ''})
  ])
  
  console.log(`seeded ${events.length} users`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
