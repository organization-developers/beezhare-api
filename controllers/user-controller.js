'use strict';

class UserController {
  static async userSignIn(req, res, next) {
    try {
      res.status(200);
      res.json({
        message: "YEAYYYYY!!"
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
