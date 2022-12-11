const express = require('express')
const router = express.Router()
// controller
const controller = require('../controllers/ToughtsController')

// helper proteger rota
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth , controller.createTought)
router.post('/add', checkAuth , controller.createToughtSave)
router.get('/edit/:id', checkAuth , controller.updateTought)
router.post('/edit', checkAuth , controller.updateToughtSave)
router.get('/dashboard', checkAuth , controller.dashboard)
router.post('/remove', checkAuth , controller.removeTought)
router.get('/', controller.showToughts)

module.exports = router