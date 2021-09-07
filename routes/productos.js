const router = require('express').Router()
const { index, comentarios } = require('../controllers/productosController.js')

router.get('/:id', index)
router.get('/:id/comentarios/:idComentario?', comentarios)

module.exports = router;
