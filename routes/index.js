const router = require("express").Router()
const images = require("./images")
const errHandler = require("../middlewares/errHandler")

router.get('/', (req, res) => {
  res.json({ msg: "Hello from index" })
})

router.use('/images', images)

router.use(errHandler)

module.exports = router