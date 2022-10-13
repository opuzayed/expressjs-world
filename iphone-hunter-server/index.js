const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('look mama mama again iphone server running');
});

app.get('/phones', (req, res) =>{
  res.send('phon data is comming');  
})
app.listen(port, () =>{
    console.log(`iphone server is running on port : ${port}`);
});