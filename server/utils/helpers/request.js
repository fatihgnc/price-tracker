const {
  BERSHKA_PRICE_SELECTOR,
  ZARA_PRICE_SELECTOR,
  HB_PRICE_SELECTOR,
  TY_PRICE_SELECTOR,
  USER_AGENT,
  BERSHKA,
  HEPSIBURADA,
  TRENDYOL,
  AMAZON,
  ZARA,
  AMAZON_PRICE_SELECTORS,
} = require('../constants');

module.exports = {
  getScrapeParams: (url) => {
    return (
      (url.includes(BERSHKA) && {
        userAgent: USER_AGENT,
        priceSelector: BERSHKA_PRICE_SELECTOR,
        site: BERSHKA,
      }) ||
      (url.includes(ZARA) && {
        userAgent: USER_AGENT,
        priceSelector: ZARA_PRICE_SELECTOR,
        site: ZARA,
      }) ||
      (url.includes(HEPSIBURADA) && {
        priceSelector: HB_PRICE_SELECTOR,
        site: HEPSIBURADA,
      }) ||
      (url.includes(TRENDYOL) && {
        priceSelector: TY_PRICE_SELECTOR,
        site: TRENDYOL,
      }) ||
      (url.includes(AMAZON) && {
        priceSelector: AMAZON_PRICE_SELECTORS,
        site: AMAZON,
      })
    );
  },
  fetchPrice: async (opts, selector, site) => {
    const res = await axios(opts);
    const $ = cheerio.load(res.data);
    if (site === AMAZON) {
      return $(selector).html();
    }
    return $(selector).text().trim().split(',')[0];
  },
};
