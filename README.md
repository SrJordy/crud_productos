# 🚀 API Testing Interface

Una interfaz web simple para probar tu API de productos.

## 🔧 Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor:**
   ```bash
   npm start
   ```

3. **Abrir la interfaz:**
   - Ve a http://localhost:3000 en tu navegador
   - ¡Ya puedes empezar a hacer peticiones!

## 📱 Características

### ✨ Interfaz Simple
- **Selecciona el método HTTP** (GET, POST, PUT, PATCH, DELETE)
- **Escribe el endpoint** (ej: `/productos`, `/productos/1`)
- **Agrega datos JSON** para POST, PUT y PATCH
- **Envía la petición** con un click

### 🔍 Visualización de Respuestas
- **Estado HTTP** claramente marcado (éxito/error)
- **Respuesta formateada** en JSON
- **Manejo de errores** con detalles específicos
- **Indicador de carga** mientras se procesa

### 🎯 Ejemplos Incluidos
La interfaz incluye ejemplos de uso para todos los endpoints:
- `GET /productos` - Ver todos los productos
- `GET /productos/1` - Ver un producto específico
- `POST /productos` - Crear nuevo producto
- `PUT /productos/1` - Actualizar producto completo
- `PATCH /productos/1` - Actualizar producto parcialmente
- `DELETE /productos/1` - Eliminar producto

## 🛠️ Cómo Usar

### Para obtener todos los productos:
1. Selecciona **GET**
2. Endpoint: `/productos`
3. Click en **Enviar Petición**

### Para crear un producto nuevo:
1. Selecciona **POST**
2. Endpoint: `/productos`
3. En el cuerpo JSON:
   ```json
   {
     "producto": "Laptop Dell Inspiron",
     "precio": 999.99,
     "cantidad": 10
   }
   ```
4. Click en **Enviar Petición**

### Para actualizar un producto completo:
1. Selecciona **PUT**
2. Endpoint: `/productos/1` (reemplaza 1 con el ID real)
3. En el cuerpo JSON:
   ```json
   {
     "producto": "Laptop HP Actualizada",
     "precio": 1299.99,
     "cantidad": 5
   }
   ```
4. Click en **Enviar Petición**

### Para actualizar un producto parcialmente:
1. Selecciona **PATCH**
2. Endpoint: `/productos/1` (reemplaza 1 con el ID real)
3. En el cuerpo JSON (solo los campos que quieres cambiar):
   ```json
   {
     "precio": 899.99,
     "cantidad": 15
   }
   ```
4. Click en **Enviar Petición**

### Para eliminar un producto:
1. Selecciona **DELETE**
2. Endpoint: `/productos/1` (reemplaza 1 con el ID real)
3. Click en **Enviar Petición**

## ❌ Manejo de Errores

La interfaz maneja automáticamente:
- **Errores de conexión** - cuando el servidor no está disponible
- **JSON inválido** - cuando el formato no es correcto
- **Errores HTTP** - 400, 404, 500, etc.
- **Respuestas vacías** - cuando no hay datos

## � Estructura de la Base de Datos

La tabla `productos` tiene los siguientes campos:

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| `id` | INTEGER | ID único (autoincremental) | ❌ Auto |
| `producto` | TEXT | Nombre del producto | ✅ Sí |
| `precio` | REAL | Precio del producto | ✅ Sí |
| `cantidad` | INTEGER | Cantidad en stock | ✅ Sí |

### Ejemplos de datos válidos:

```json
{
  "producto": "Laptop Dell Inspiron 15",
  "precio": 999.99,
  "cantidad": 5
}
```

```json
{
  "producto": "Mouse Logitech MX Master",
  "precio": 89.99,
  "cantidad": 25
}
```

## �📋 Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express
- **Base de datos:** SQLite3
- **Estilo:** CSS Grid, Flexbox, Gradientes modernos

¡Disfruta probando tu API! 🎉