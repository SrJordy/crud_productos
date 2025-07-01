const express = require('express');
const router = express.Router();
const Producto = require('../models/productoModel');
const db = require('../db/database');

// Obtener todos los productos
router.get('/', (req, res) => {
    Producto.getAll((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Obtener producto por ID
router.get('/:id', (req, res) => {
    Producto.getById(req.params.id, (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(400).json({ error: 'ID inválido: producto no encontrado' });
        res.json(row);
    });
});

// Crear nuevo producto
router.post('/', (req, res) => {
    const { producto, precio, cantidad } = req.body;
    if (!producto || precio == null || cantidad == null) {
        return res.status(400).json({ error: 'Producto, precio y cantidad son requeridos' });
    }

    Producto.create({ producto, precio, cantidad }, (err, newProducto) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json(newProducto);
    });
});

// Actualizar producto completo (PUT)
router.put('/:id', (req, res) => {
    const { producto, precio, cantidad } = req.body;
    if (!producto || precio == null || cantidad == null) {
        return res.status(400).json({ error: 'Producto, precio y cantidad son requeridos' });
    }

    Producto.update(req.params.id, { producto, precio, cantidad }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.changes === 0) {
            return res.status(400).json({ error: 'ID inválido: producto no encontrado' });
        }
        res.json({ id: req.params.id, producto, precio, cantidad });
    });
});

// Actualizar parcialmente (PATCH)
router.patch('/:id', (req, res) => {
    const campos = [];
    const valores = [];

    const { producto, precio, cantidad } = req.body;

    if (producto !== undefined) {
        campos.push('producto = ?');
        valores.push(producto);
    }
    if (precio !== undefined) {
        campos.push('precio = ?');
        valores.push(precio);
    }
    if (cantidad !== undefined) {
        campos.push('cantidad = ?');
        valores.push(cantidad);
    }

    if (campos.length === 0) {
        return res.status(400).json({ error: 'Debe proporcionar al menos un campo para actualizar' });
    }

    valores.push(req.params.id);
    const sql = `UPDATE productos SET ${campos.join(', ')} WHERE id = ?`;

    db.run(sql, valores, function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) {
            return res.status(400).json({ error: 'ID inválido: producto no encontrado' });
        }
        res.json({ id: req.params.id, actualizado: true });
    });
});

// Eliminar producto
router.delete('/:id', (req, res) => {
    Producto.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.changes === 0) {
            return res.status(400).json({ error: 'ID inválido: producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado' });
    });
});

module.exports = router;
