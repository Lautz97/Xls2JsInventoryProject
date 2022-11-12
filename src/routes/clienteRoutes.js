const express = require("express")
const router = express.Router()
const clienteC = new (require("../controllers/clienteController"))()

/* GET home page. */
router.post("/add", (req, res, next) => {
	clienteC.addCliente(req.query)
	next()
})

module.exports = router
