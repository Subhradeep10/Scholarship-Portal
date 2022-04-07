const mongoose = require('mongoose');

const NationalSchema = new mongoose.Schema({
    sname: String,
    details: String,
    apply: String
});

const NationalModel = mongoose.model("National", NationalSchema);

module.exports = NationalModel;