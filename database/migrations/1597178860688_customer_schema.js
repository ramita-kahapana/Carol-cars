'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
    up() {
        this.create('customers', (table) => {
            table.increments()
            table.string('name')
            table.string('lastname')
            table.string('username')
            table.string('password')
            table.timestamps()
        })
    }

    down() {
        this.drop('customers')
    }
}

module.exports = CustomerSchema