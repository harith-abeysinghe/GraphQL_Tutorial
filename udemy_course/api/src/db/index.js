const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

const createPetModel = require("./pet");
const constUserModel = require("./user");

module.exports = {
	db,
	models: {
		Pet: createPetModel(db),
		User: constUserModel(db),
	},
};
