'use strict';

const mainRouter = require('express').Router();

const userRouter = require('./user-router');

mainRouter.use('/users', userRouter);

module.exports = mainRouter;
