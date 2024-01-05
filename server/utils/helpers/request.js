const axios = require('axios');
const cheerio = require('cheerio');

const {
  AMAZON,
  AMAZON_PRICE_SELECTOR,
  AMAZON_STOCK_SELECTOR,
  AMAZON_PRODUCT_TITLE_SELECTOR,
} = require('../constants');

module.exports = {
  getScrapeParams: (url) => {
    return {
      priceSelector: AMAZON_PRICE_SELECTOR,
      site: AMAZON,
    };
    // switch (true) {
    //   case url.includes(BERSHKA):
    //     return {
    //       userAgent: USER_AGENT,
    //       priceSelector: BERSHKA_PRICE_SELECTOR,
    //       site: BERSHKA,
    //     };
    //   case url.includes(ZARA):
    //     return {
    //       userAgent: USER_AGENT,
    //       priceSelector: ZARA_PRICE_SELECTOR,
    //       site: ZARA,
    //     };
    //   case url.includes(HEPSIBURADA):
    //     return {
    //       userAgent: USER_AGENT,
    //       priceSelector: HB_PRICE_SELECTOR,
    //       site: HEPSIBURADA,
    //     };
    //   case url.includes(TRENDYOL):
    //     return {
    //       priceSelector: TY_PRICE_SELECTOR,
    //       site: TRENDYOL,
    //     };
    //   case url.includes(AMAZON):
    //   default:
    //     return {};
    // }
  },
  fetchProductData: async (opts, selector, site) => {
    if (site !== AMAZON)
      throw new Error('Websites other than Amazon is not supported yet.');

    const res = await axios(opts);
    const $ = cheerio.load(res.data);
    const isProductOutOfStock = !!$(AMAZON_STOCK_SELECTOR).html();
    if (isProductOutOfStock) throw new Error('Product is out of stock.');

    const price = $(selector).html();
    const title = $(AMAZON_PRODUCT_TITLE_SELECTOR).text().trim();
    if (!price || !title)
      throw new Error('Price and/or title data could not be found!');

    return { price, title };
  },
};
