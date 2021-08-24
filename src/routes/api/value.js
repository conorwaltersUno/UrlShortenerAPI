const express = require('express');
const router = express.Router();

const arr = [];

router.post('/:value',
async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.params.value == null)
    {
        res.statusCode = 400;
        res.json({"Error": "You need to send a request with a valid value"});
    }else if(typeof req.params.value === 'string')
    {
        req.params.value = req.params.value.replace(/\\$/, "");
        arr.push(req.params.value)
        console.log(arr)
        res.json({"index": arr.length - 1});
    }else {
        res.statusCode = 400;
        res.json({"Error": "The value you are trying to store needs to be a correct url"});
    }
    
})

router.get('/:id', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(arr[req.params.id])
    {
        res.redirect(`${arr[req.params.id]}`)
    }else {
        res.statusCode = 400;
        res.json({"Error": "This id does not exist"});
    }
})


module.exports = router;