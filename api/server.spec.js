const request = require('supertest')

const server = require('./server')

describe('server.js',  () => {
    describe('get /', () => {
        it('returns 200', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
})