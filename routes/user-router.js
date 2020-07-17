'use strict';

const userRouter = require('express').Router();

const UserController = require('../controllers/user-controller');

userRouter.get('/signin', UserController.userSignIn);

module.exports = userRouter;
