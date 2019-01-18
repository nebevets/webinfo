const express = require('express');
const server = express();
const db = require('mysql');
const PORT = process.env.PORT || 6969;

server.use(express.static(__dirname + '/html'));
server.use(express.json());

server.post('/webinfo', (req, res) => {
    const output = {
        success: true
    }
    req.body.data.map(item => console.log(item));
    res.send(output);
});

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});