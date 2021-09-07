const controller = {
    index: (req, res) => {
        // const productoID = req.params.id
        // const productoName = req.params.name
        const {id: idProducto} = req.params
        res.send('Estas viendo el producto ' + idProducto )
    },
    comentarios: (req, res) => {
        const { id, idComentario } = req.params
        if (idComentario === undefined) {
            res.send(`Estas viendo los comentarios del producto ${id}`)
        } else {
            res.send(`Estas viendo los comentarios del producto ${id} el comentario específico ${idComentario}`)
    
        }
    }
}

module.exports = controller;