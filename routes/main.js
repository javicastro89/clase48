const router = require('express').Router()


router.get('/', (req, res) => {
    res.send('Soy Home')
})

module.exports = router;