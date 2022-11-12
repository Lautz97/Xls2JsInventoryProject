const mongoose = require("mongoose")
const { Model, Schema } = mongoose

const cliente = new Schema({
	codice: String,
	nome: String
})
class Cliente extends Model {
	constructor(cod, n) {
		super()
		this.codice = cod
		this.nome = n
	}
}

module.exports = mongoose.model(Cliente, cliente, "Cliente")
