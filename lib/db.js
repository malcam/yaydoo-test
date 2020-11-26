'use strict'

const { count } = require('console');
const { resolve } = require('path');
const path = require('path')
const { Database } = require('sqlite3').verbose();

const client = new Database(path.join(__dirname, '..', 'secrets.db'))
const queries = {
    tableProducts: `
      CREATE TABLE IF NOT EXISTS products (
          id TEXT,
          category TEXT NULL,
          title TEXT,                  
          rank TEXT,
          NumberOfReviews TEXT,
          img TEXT     
      )
    `
}

async function createDb() {
    return new Promise((resolve, reject) => {
        client.serialize(() => {
            client.run(queries.tableProducts, err => {
                if (err) return reject(err)
                resolve({
                    client,
                    setProducts,
                    getProducts
                })
            })
        })

    })
}

async function setProducts(id, category, title, rank, NumberOfReviews, img) {
    return new Promise((resolve, reject) => {
        const stmt = client.prepare('INSERT INTO products VALUES ( ?, ?, ?, ?, ?, ?);')
        stmt.run(id, category, title, rank, NumberOfReviews, img)
        stmt.finalize(err => {
            if (err) return reject(err);

            resolve()
        })
    })
}

async function getProducts() {
    return new Promise((resolve, reject) => {
        const products = [];
        client.each('SELECT * FROM products;', (err, row) => {
            if (err) return reject(err);
            products.push(row);
        }, (err, count) => {
            if (err) return reject(err);
            resolve({count, products})
        })

    })
}

module.exports = {
    createDb
}