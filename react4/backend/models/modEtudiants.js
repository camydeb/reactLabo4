const mongoose = require('mongoose');

const UtilSchema = new mongoose.Schema({
    code: String,
    nom: String,
    prenom: String
});
module.exports = mongoose.model('etudiant',UtilSchema);