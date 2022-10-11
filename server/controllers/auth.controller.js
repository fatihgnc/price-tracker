const { REGISTER_PATH, LOGIN_PATH } = require('../utils/constants');

const authController = require('express').Router();

module.exports = () => {
  authController.post(LOGIN_PATH, async (req, res) => {});
  authController.post(REGISTER_PATH, async (req, res) => {});

  return authController;
};
