const router = require('express').Router()
const { home } = require('../controllers/mainController.js')

router.get('/', home)

module.exports = router;