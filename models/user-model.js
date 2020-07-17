'use strict';

const { Schema, model } = require('mongoose');
const { hashSync: hashPasswordSync } = require('bcrypt');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name cannot be empty!'],
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    required: [true, 'Username cannot be empty!'],
    unique: [true, 'Username is not available.'],
  },
  email: {
    type: String,
    required: [true, 'Email cannot be empty!'],
    unique: [true, 'Email is not available.'],
    validate: [validator.isEmail, 'Invalid email address!'],
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty!'],
    minlength: [6, 'Minimum length is 6 characters!'],
  },
  apiKey: {
    type: String,
    required: [true, 'API Key cannot be empty!'],
  },
});

UserSchema.pre('save', function (this, next) {
  this.password = hashPasswordSync(this.password, 10);
  this.createdAt = new Date();
  next();
});

const User = model('User', UserSchema);

module.exports = User;
