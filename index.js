const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello world from node js');
});

app.listen(port, () => {
    console.log(`server is running on ${port} port`);
});