'use strict'

const path = require('path')
const { Database } = require('sqlite3').verbose();

const db = new Database(path.join(__dirname, '..', 'secrets.db'))
const queries = {
    tableProducts:`
      CREATE TABLE IF NOT EXISTS products (
          product TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          rank TEXT,
          NumberOfReviews TEXT
      )
    `    
}

async function createDb() {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run(queries.tableProducts, err => {
                if(err) return reject(err)
                resolve({
                    client: db
                })
            })
        })

    })
}

module.exports = {
    createDb
}