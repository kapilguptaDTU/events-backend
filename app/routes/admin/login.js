const router = require('express').Router();

router.get('/login', (req,res) => {
    res.send("hello admin");
})

module.exports = router;