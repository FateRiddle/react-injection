const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

module.exports = app;
