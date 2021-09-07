const server = require('express')
const app = server()
const productos = require('./routes/productos.js')
const main = require('./routes/main.js')

const PORT = 3030

app.use('/productos', productos)
app.use('/', main)


app.listen(PORT, () => console.log('Servidor levantado en puerto ' + PORT))