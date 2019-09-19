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

    describe('remove()', () => {
        it('should remove shoe with specific id from db', async () => {
            const [id] = await Shoes.add({ name: 'Puma' })
            await Shoes.remove(id)

            let shoe  = await db('shoes')

            expect(shoe).toHaveLength(0)
        })
        it('should remove only one shoe', async () => {
            await Shoes.add({ name: 'Nike' })
            await Shoes.add({ name: 'Run' })
            const [id] = await Shoes.add({ name: 'Puma' })
            await Shoes.remove(id)

            let shoe  = await db('shoes')
            console.log(shoe)

            expect(shoe).toHaveLength(2)
        })
        

    })

    
})