const mongoose = require('mongoose');

const InternationalSchema = new mongoose.Schema({
    sname: String,
    details: String,
    apply: String
});

const InternationalModel = mongoose.model("International", InternationalSchema);

module.exports = InternationalModel;