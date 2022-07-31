const {
  BERSHKA_PRICE_SELECTOR,
  ZARA_PRICE_SELECTOR,
  HB_PRICE_SELECTOR,
  TY_PRICE_SELECTOR,
} = require('../constants/constants');

module.exports = {
  getScrapeParams: (url) => {
    if (url.includes('bershka') || url.includes('zara'))
      return {
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        priceSelector: url.includes('bershka')
          ? BERSHKA_PRICE_SELECTOR
          : ZARA_PRICE_SELECTOR,
      };

    return {
      priceSelector: url.includes('hepsiburada')
        ? HB_PRICE_SELECTOR
        : TY_PRICE_SELECTOR,
    };
  },
};
