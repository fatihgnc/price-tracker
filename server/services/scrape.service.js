const axios = require('axios');
const cheerio = require('cheerio');
const { getScrapeParams } = require('../helpers/request');
const { AMAZON } = require('../utils/constants');

const fetchPrice = async (opts, selector, site) => {
  const res = await axios(opts);
  const $ = cheerio.load(res.data);
  if (site === AMAZON) {
    return $(selector).html();
  }
  return $(selector).text().trim().split(',')[0];
};

module.exports = {
  async scrapePrice(url) {
    const options = {
      url,
      method: 'GET',
      headers: {
        accept: '*',
        'Accept-Language': 'en-US, en;q=0.5',
      },
    };

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
