var chai = require('chai')
var expect = chai.expect
var supertest = require('supertest')

var api = supertest('http://todos.demo.rootpath.io')

describe('GET /todos/', function() {
  // tests to see if we get a 200 status code when we send a GET request
  it('Get all the todos when there are todos present in the collection', function(done) {
    api
      .get('/todos') // make the request
      .expect(200) // expect a 200 response code
      .end(done) // pass the `done` callback so we know when this test is finished
  })

  it('Get an indiviual todo that exists within the collection', function(done) {
    api
      .get('/todos/14778') // make the request
      .expect(200)
      .expect({
        id: 14778,
        title:
        'Go on a Lord of the Rings tour in New Zealand',
        due: '1999-04-11T00:00:00.000Z',
        notes: ''
      })
      .end(done)

    })

      it('Get an individual todo using a minus ID number', function(done){
        api
          .get('/todos/-452')
          .expect(404)
          .end(done)
      })
})
