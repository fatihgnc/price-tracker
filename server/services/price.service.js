const { getScrapeParams, fetchPrice } = require('../utils/helpers/request');

const options = {
  headers: {
    accept: '*',
    'Accept-Language': 'en-US, en;q=0.5',
  },
};

module.exports = () => {
  return {
    async scrapePrice(url) {
      options['url'] = url;

      const { priceSelector, site, userAgent } = getScrapeParams(url);
      if (userAgent) options.headers['User-Agent'] = userAgent;

      try {
        const price = await fetchPrice(options, priceSelector, site);
        return price;
      } catch (error) {
        throw error;
      }
    },
  };
};
