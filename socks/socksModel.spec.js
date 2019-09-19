const Socks = require('./socksmodel')

const db = require('../data/dbConfig')

describe('socks model', () => {
    beforeEach(async () => {
        await db('shoes').truncate()
    })

    describe('add()', () => {
        it('should inserte socks into db', async () => {
            await Socks.add({ name: 'hyper' })

            let sock = await db('shoes')

            expect(sock).toHaveLength(1)
        })
    })
})