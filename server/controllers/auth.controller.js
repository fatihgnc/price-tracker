const {
  REGISTER_PATH,
  LOGIN_PATH,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} = require('../utils/constants');

const authController = require('express').Router();

module.exports = ({ authService }) => {
  authController.post(LOGIN_PATH, async (req, res) => {
    const { email, password } = req.body;
    // TODO: Move this logic to middleware.
    // Validate data.
    if (!EMAIL_REGEX.test(email) || !PASSWORD_REGEX.test(password)) {
      return res.status(400).send('Data is not valid.');
    }
    const { status, ...data } = await authService.login(req.body);
    res.status(status).send(data);
  });
  authController.post(REGISTER_PATH, async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    // TODO: Move this logic to middleware.
    // Validate data.
    if (
      !EMAIL_REGEX.test(email) ||
      !PASSWORD_REGEX.test(password) ||
      !PASSWORD_REGEX.test(confirmPassword)
    ) {
      return res.status(400).send('Data is not valid.');
    }
    const { status, ...data } = await authService.register(req.body);
    res.status(status).send(data);
  });

  return authController;
};
