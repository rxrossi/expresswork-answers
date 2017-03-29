const express = require('express');
const app 		= express();

const filePath = process.argv[3];

app.get('/home', (req, res) => {
	app.set('view engine', 'pug');

	res.render(filePath, {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
