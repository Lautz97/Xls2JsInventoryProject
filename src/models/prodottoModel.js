const mongoose = require("mongoose")
const { Model, Schema } = mongoose

const prodotto = new Schema({
	nome: String,
	descrizione: String,
	// is_finito: { type: Boolean, default: false },
	// is_parziale: { type: Boolean, default: false },
	// is_commerciale: { type: Boolean, default: false }
})
class Prodotto extends Model {

	/**
	 * 
	 * @param {String} n the name of the product
	 * @param {String} d the description of the product
	 */
	constructor(n, d) {
		super()
		this.nome = n
		this.descrizione = d
	}
}

module.exports = mongoose.model(Prodotto, prodotto, "Prodotto")
