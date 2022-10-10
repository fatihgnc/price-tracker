module.exports = {
  HB_PRICE_SELECTOR: "span[itemprop='price']",
  TY_PRICE_SELECTOR: 'span.prc-dsc',
  ZARA_PRICE_SELECTOR: 'span.money-amount__main',
  BERSHKA_PRICE_SELECTOR: 'span.current-price-elem',
  AMAZON_PRICE_SELECTORS: 'span.a-offscreen',

  AMAZON: 'amazon',
  HEPSIBURADA: 'hepsiburada',
  TRENDYOL: 'trendyol',
  BERSHKA: 'bershka',
  ZARA: 'zara',
  USER_AGENT:
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36',

  ROOT_PATH: '/',
  REGISTER_PATH: '/register',
  LOGIN_PATH: '/login',

  DB_URI: 'mongodb://localhost:27017/price-tracker',
  PORT: process.env.PORT || 3001,
};
