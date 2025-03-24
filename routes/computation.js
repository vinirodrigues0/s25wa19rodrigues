var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let x = (Math.random() * 100).toFixed(2);

    if (req.query.x) {
        x = parseFloat(req.query.x).toFixed(2);
    }

    let y = Math.sqrt(x).toFixed(2);
    res.send(`Math.sqrt() applied to ${x} is ${y}`);
});

module.exports = router;