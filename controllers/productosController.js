const controller = {
    index: (req, res) => {
        // const productoID = req.params.id
        // const productoName = req.params.name
        const {id: idProducto} = req.params
        console.log(idProducto)
    
        res.send('Estas viendo el producto ' + idProducto )
    }
}

module.exports = controller;