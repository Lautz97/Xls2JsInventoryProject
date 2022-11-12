const mongoose = require("mongoose")
const { Model, Schema } = mongoose

const listino = new Schema({
	cliente: {
		type: Schema.Types.ObjectId,
		ref: "Cliente"
	},
	prodotto: {
		type: Schema.Types.ObjectId,
		ref: "Prodotto"
	},
	prezzoNetto: String
})
class Listino extends Model {
	/**
	 *
	 * @param {Cliente} cli l'oggetto cliente a cui corrisponde l'associazione prodotto prezzo
	 * @param {Prodotto} prod l'oggetto prodotto de associare con il prezzo
	 * @param {*} prezzo il prezzo netto del prodotto immagazzinato come stringa
	 */
	constructor(cli, prod, prezzo) {
		super()
		this.cliente = cli
		this.prodotto = prod
		this.prezzoNetto = prezzo
	}
}

module.exports = mongoose.model(Listino, listino, "Listino")
