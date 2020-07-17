'use strict';

function errorHandler(err, req, res, next) {
  switch (err.name.toLowerCase()) {
    case 'jsonwebtokenerror':
      return res.status(401);
  
    default:
      return res.status(500);
  }
}

module.exports = errorHandler;
