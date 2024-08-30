const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const config = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
};

module.exports = config;