const cookieParser = require("cookie-parser")
const logger = require("morgan")

const express = require("express")
const app = express()
const path = require("path")

module.exports = class middlewaresStarter {
	constructor() {}

	async init() {
		try {
			//morgan -> express Logger
			app.use(logger(":method :url :status :res[content-length] - :response-time ms"))

			app.use(express.json())
			app.use(express.urlencoded({ extended: false }))
			app.use(cookieParser())

			//define static folder path
			app.use(express.static(path.join(__dirname, "../../public")))
		} catch (error) {
			console.dir("ERROR: " + error)
			return false
		} finally {
			return true
		}
	}
}
