const express = require('express');
const router = express.Router();
const db = require('../Databases/db.js');

router.route("/research").get(function (req, res) {
    let db_connect = db.getDb("National");
    db_connect
        .collection("researches")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
})

module.exports = router;