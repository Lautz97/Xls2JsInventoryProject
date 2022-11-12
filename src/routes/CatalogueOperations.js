const express = require("express")
const router = express.Router()

/* GET home page.
 *!!!	w/ list of all items(?)
 */
router.get("/", (req, res, next) => {
	res.send({ title: "catalogue", list: [], message: { add: "make a new entry", mod: "modify a product", delete: "delete?!" } })
})

router.get("/add", (req, res, next) => {
	res.send({ title: "make a new catalogue entry", message: {} })
})

router.get("/mod?:id" /*+query*/, (req, res, next) => {
	res.send({ title: "update an existing catalogue entry", message: { toUpdate: "must find a query to insert" } })
})

router.get(`/delete?:id` /*+query*/, (req, res, next) => {
	res.send({ title: "delete an existing catalogue entry", message: { toDelete: req.query } })
	//http://localhost:5000/objCatalogue/delete?id=QUESTOELID&nome=NOMEQUI
})

module.exports = router
