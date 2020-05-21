const express = require("express")
const router = express.Router()

router.all("/*/", (req, res, next) => {
	console.dir(`requested: ` + req.url + `    ` + `with method: ` + req.method)
	next()
})

/* GET home page. */
router.get("/", (req, res, next) => {
	res.send({ title: "Inventory", message: "Xlsx <=> Js" })
})

module.exports = router
