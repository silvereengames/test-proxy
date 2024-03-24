var proxy = require('express-http-proxy');
const express = require('express');
const app = express();
const port = 5000;

app.use('/proxy', proxy('www.google.com'));

/*app.get('/', (req, res) => {
    res.send('Hello World!')
});*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});