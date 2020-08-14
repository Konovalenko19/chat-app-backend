const express = require('express');
const user = require('./user');

const app = express();

user(app);

module.exports = user(app);