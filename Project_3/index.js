/* Configure private blockchain project to include a RESTful API with Node.js framework
   running on port 8000. */

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const Block = require('./block');
const Blockchain = require('./blockchain');
const chain = new Blockchain();

const port = 8000
app.listen(port, ()=> console.log(`API listening on port ${port}..`))
app.use(bodyparser.json());

app.get('/', (req, res)=> {
    res.status(404).json({
        "status":404,
        "message": "Accepted endpoints are only: POST /block or GET /block/{BLOCK_HEIGHT}"
    })
});

app.get('/block/:height', async (req, res) => {
    try {
        const response = await chain.getBlock(req.params.height);
        res.send(response)
    }
    catch (error) {
        res.status(404).json({
            "status":404,
            "message":"Block not found"
        })
    }
})

/*POST Block endpoint using key/value pair within request body.
Preferred URL path http://localhost:8000/block
The block contents must respond to POST request with block contents in JSON format
*/

app.post('/block/',async(req, res)=> {
    if(req.body.body === '' || req.body.body === undefined) {
        res.status(400).json({
            "status":400,
            "message":"Body of the message is blank"
        })
    }
    await chain.addBlock(new Block(req.body.body));
    const height = await chain.getBlockHeight();
    const response = await chain.getBlock(height);
    res.send(response); 
})