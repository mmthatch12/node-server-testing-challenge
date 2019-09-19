const Shoes = require('./socksmodel')

const db = require('../data/dbConfig')

describe('socks model', () => {
    beforeEach(async () => {
        await db('shoes').truncate()
    })

    describe('add()', () => {
        it('should insert shoes into db', async () => {
            await Shoes.add({ name: 'hyper' })

            let shoe = await db('shoes')

            expect(shoe).toHaveLength(1)
        })
        it('should insert name of shoes', async () => {
            const [id] = await Shoes.add({ name: 'Altra'})

            let shoe  = await db('shoes').where({ id }).first()

            expect(shoe.name).toBe('Altra')
        })
    })

    
})