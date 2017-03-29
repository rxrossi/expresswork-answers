const express = require('express');
const app = express();

const filePath = process.argv[3];

app.use(express.static(filePath || path.join(__dirname, 'public')));

app.listen(process.argv[2]);
