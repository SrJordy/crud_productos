const db = require('../db/database');

const Producto = {
    getAll: (callback) => {
        db.all('SELECT * FROM productos', [], callback);
    },

    getById: (id, callback) => {
        db.get('SELECT * FROM productos WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        const { producto, precio, cantidad } = data;
        db.run(
            'INSERT INTO productos (producto, precio, cantidad) VALUES (?, ?, ?)',
            [producto, precio, cantidad],
            function (err) {
                callback(err, { id: this?.lastID, ...data });
            }
        );
    },

    update: (id, data, callback) => {
        const { producto, precio, cantidad } = data;
        db.run(
            'UPDATE productos SET producto = ?, precio = ?, cantidad = ? WHERE id = ?',
            [producto, precio, cantidad, id],
            function (err) {
                callback(err, { changes: this?.changes });
            }
        );
    },

    delete: (id, callback) => {
        db.run('DELETE FROM productos WHERE id = ?', [id], function (err) {
            callback(err, { changes: this?.changes });
        });
    }
};

module.exports = Producto;
