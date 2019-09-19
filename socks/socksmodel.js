const db = require('../data/dbConfig')

module.exports = {
    add,
    remove
}

function add(info) {
    return db('shoes').insert(info, 'id')
}

function remove(id) {
    return db('shoes').where('id', id).del()
}