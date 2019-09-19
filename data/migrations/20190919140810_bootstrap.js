
exports.up = function(knex) {
  return knex.schema.createTable('shoes', tbl => {
      tbl.increments()

      tbl.string('name', 128).unique().notNullable()
      tbl.text('description').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('shoes')
  
};
