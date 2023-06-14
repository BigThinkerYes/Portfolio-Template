const Sequelize = require("sequelize");
const {sequelize} = require("../db");

const AdasJournal = sequelize.define("adas_journal", {
    title: Sequelize.STRING,
    notes: Sequelize.STRING
})

module.exports = {AdasJournal};