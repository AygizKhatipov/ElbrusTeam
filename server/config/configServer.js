const express = require('express');
const cookieParser = require('cookie-parser')

const config = (app) => {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cookieParser());
}

module.exports = config;