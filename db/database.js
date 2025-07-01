const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./productos.db');

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        producto TEXT NOT NULL,
        precio REAL NOT NULL,
        cantidad INTEGER NOT NULL
    )
    `);
});

module.exports = db;
