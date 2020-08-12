'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up() {
        this.create('products', (table) => {
            table.increments()
            table.string('name')
            table.string('detail')
            table.interger('price')
            table.timestamps()
        })
    }

    down() {
        this.drop('products')
    }
}

module.exports = ProductSchema