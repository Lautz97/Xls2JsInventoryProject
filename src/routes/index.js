const express = require("express")
const router = express.Router()

router.all("/*/", (req, res, next) => {
	console.dir(`requested: ` + req.url + `    ` + `with method: ` + req.method)
	next()
})

/* GET home page. */
router.get("/", (req, res, next) => {
	res.send({
		title: "Inventory",
		message: "Xlsx <=> Js",
		urls: ["url_API: `localhost:5000/cat` ", "url_CATALOGUE: `localhost:5000/api` "]
	})
})

module.exports = router
