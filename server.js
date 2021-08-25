const express = require('express');
const app = express();

app.use(express.json({ extended : false}));



app.use('/', require('./src/routes/api/value'));

const PORT = 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST)
