const {
  getScrapeParams,
  fetchProductData,
} = require('../utils/helpers/request');

const options = {
  headers: {
    accept: '*',
    'Accept-Language': 'en-US, en;q=0.5',
  },
};

module.exports = () => {
  return {
    async scrapeProduct(url) {
      options.url = url;
      const { priceSelector, site, userAgent } = getScrapeParams(url);
      if (userAgent) options.headers['User-Agent'] = userAgent;
      return await fetchProductData(options, priceSelector, site);
    },
  };
};
