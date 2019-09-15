const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) =>{
    res.send('we are on index!')
})

router.get('/laughs', (req,res,next) =>{
    res.send("this is julie's laughs")
})

module.exports = router;