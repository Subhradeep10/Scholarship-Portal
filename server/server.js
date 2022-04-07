const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./Databases/db.js');



const NationalData = require('./Databases/National_Data.js');
const RegionalData = require('./Databases/Regional_Data.js');
const InternationalData = require('./Databases/International_Data.js');
const PrivateData = require('./Databases/Private_Data.js');
const ResearchData = require('./Databases/Research_Data.js');

NationalData();
RegionalData();
InternationalData();
PrivateData();
ResearchData();


app.use(cors());
app.use(require("./routes/NationalRoute.js"));
app.use(require("./routes/RegionalRoute.js"));
app.use(require("./routes/InternationalRoutes.js"));
app.use(require("./routes/PrivateRoutes.js"));
app.use(require("./routes/ResearchRoutes.js"));

mongoose.connect(process.env.MONGODBURI || "mongodb+srv://user:1234@cluster0.f4e4k.mongodb.net/National?retryWrites=true&w=majority");




app.listen(PORT, () => {
    db.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server listening on port ${PORT}`);
});