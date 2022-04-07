const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema({
    sname: String,
    details: String,
    apply: String
});

const ResearchModel = mongoose.model("Research", ResearchSchema);

module.exports = ResearchModel;