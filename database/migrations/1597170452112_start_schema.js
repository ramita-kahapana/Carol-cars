'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StartSchema extends Schema {
    up() {
        this.create('starts', (table) => {
            table.increments()
            table.string("name")
            table.integer("mobile")
            table.string("report")
            table.timestamps()
        })
    }

    down() {
        this.drop('starts')
    }
}

module.exports = StartSchema