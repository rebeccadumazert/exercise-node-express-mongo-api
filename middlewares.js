const express = require('express');

const middlewares = app => {
  app.use(express.json());
};

module.exports = middlewares;
