const router = require("express").Router()
const ImageController = require("../controllers/ImageController")

// Movies
router.post('/', ImageController.send)
// router.get('/:id', ImageController.findById)
// router.post('/', ImageController.create)
// router.put('/:id', ImageController.update)
// router.delete('/:id', ImageController.delete)

module.exports = router