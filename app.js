'use strict';

process.env.NODE_ENV !== 'production' ? require('dotenv').config() : '';

const mainRouter = require('./routes');

// Middlewares
const errorHandler = require('./middlewares/error-handler');

const port = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter);

app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () =>
      console.log(
        `🚀 BeezHare API is running on PORT: ${port}, ENV: ${process.env.NODE_ENV}`
      )
    );
  })
  .catch((err) => {
    console.error(err);
  });
