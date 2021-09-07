const router = require('express').Router()
const {index } = require('../controllers/productosController.js')



router.get('/:id', index)

router.get('/:id/comentarios/:idComentario?', (req, res) => {
    const {id, idComentario} = req.params
    if (idComentario === undefined) {
        res.send(`Estas viendo los comentarios del producto ${id}`)
    } else {
        res.send(`Estas viendo los comentarios del producto ${id} el comentario específico ${idComentario}`)

    }
})


module.exports = router;