const mongoose = require('mongoose');

const UtilSchema = new mongoose.Schema({
    code: String,
    departement: String,
    superviseur: String
});
module.exports = mongoose.model('departement',UtilSchema);