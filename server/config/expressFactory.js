const express = require('express');
const cors = require('cors');

const { PORT } = require('../utils/constants');

module.exports = async (appContext) => {
  const { usersCollection, authService, priceService } = appContext;
  const app = express();

  // Middlewares
  app.use(express.json());
  app.use(cors());

  // Controller middlewares
  app.use(
    '/api/price',
    require('../controllers/price.controller')({ priceService })
  );
  app.use(
    '/api/auth',
    require('../controllers/auth.controller')({
      usersCollection,
      authService,
    })
  );

  app.listen(PORT, () => console.info('Server listening on port ' + PORT));
};
