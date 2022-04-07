const mongoose = require('mongoose');

const RegionalSchema = new mongoose.Schema({
    sname: String,
    details: String,
    apply: String
});

const RegionalModel = mongoose.model("Regional", RegionalSchema);

module.exports = RegionalModel;