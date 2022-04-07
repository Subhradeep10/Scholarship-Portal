const express = require('express');
const router = express.Router();
const db = require('../Databases/db.js');

router.route("/private").get(function (req, res) {
    let db_connect = db.getDb("National");
    db_connect
        .collection("privates")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
})

module.exports = router;