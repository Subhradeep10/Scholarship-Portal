const mongoose = require('mongoose');

const PrivateSchema = new mongoose.Schema({
    sname: String,
    details: String,
    apply: String
});

const PrivateModel = mongoose.model("Private", PrivateSchema);

module.exports = PrivateModel;