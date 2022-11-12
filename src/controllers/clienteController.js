const dbMan = new (require("../services/foundation/index"))()
const Cliente = require("../models/clienteModel")

module.exports = class clienteController {
	addCliente(pack) {
		console.log()
		dbMan.getData("Cliente", { _id: new Cliente(pack.codice, pack.nome) })
	}
}
