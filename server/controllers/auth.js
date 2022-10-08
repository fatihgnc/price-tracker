const { REGISTER_PATH, LOGIN_PATH } = require('../utils/constants');

const authRouter = require('express').Router();

authRouter.post(LOGIN_PATH, async (req, res) => {});

authRouter.post(REGISTER_PATH, async (req, res) => {});

module.exports = authRouter;
