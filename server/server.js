const expressFactory = require('./config/expressFactory');
const appContextFactory = require('./config/appContextFactory')();

appContextFactory
  .then((appContext) => {
    expressFactory(appContext)
      .then(() => console.log('Controllers has been set.'))
      .catch(console.error);
  })
  .then(() => console.log('Server has been started.'))
  .catch(console.error);
