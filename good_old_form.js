const express = require('express');
const app			= express();

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
	const receivedStr = req.body.str;
	res.end(receivedStr.split('').reverse().join(''))
});

app.listen(process.argv[2]);
