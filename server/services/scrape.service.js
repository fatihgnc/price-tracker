const axios = require('axios');
const cheerio = require('cheerio');
const { getScrapeParams } = require('../helpers/request');
const {
  AMAZON,
  AMAZON_PRICE_SELECTORS,
  AMAZON_PRICE_REPLACER_REGEX,
} = require('../utils/constants');

const fetchPrice = async (opts, selector) => {
  const res = await axios(opts);
  const $ = cheerio.load(res.data);
  return $(selector).text();
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

    let price = 0;

    try {
      if (site === AMAZON) {
        for await (let selector of AMAZON_PRICE_SELECTORS) {
          const fetchedPrice = await fetchPrice(options, selector);
          if (fetchedPrice) {
            price = fetchedPrice.replace(AMAZON_PRICE_REPLACER_REGEX, ' ');
            break;
          }
        }
      } else {
        price = await fetchPrice(options, priceSelector);
      }
      return price;
    } catch (error) {
      throw error;
    }
  },
};
