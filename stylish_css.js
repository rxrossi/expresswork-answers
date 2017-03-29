const express = require('express');
const app 		= express();

const filePath = process.argv[3];

app.use(require('stylus').middleware(filePath));

app.set('views', process.argv[3]);

app.use(express.static(filePath));

app.listen(process.argv[2]);
