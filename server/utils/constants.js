const dotenv = require('dotenv');
dotenv.config();

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  HB_PRICE_SELECTOR: '#originalPrice',
  TY_PRICE_SELECTOR: 'span.prc-dsc',
  ZARA_PRICE_SELECTOR: 'span.money-amount__main',
  BERSHKA_PRICE_SELECTOR: 'span.current-price-elem',
  AMAZON_PRICE_SELECTOR: 'span.a-offscreen',

  AMAZON_STOCK_SELECTOR: '#outOfStock',

  AMAZON_PRODUCT_TITLE_SELECTOR: '#productTitle',

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

  MONGO_URI:
    environment === 'development'
      ? process.env.LOCAL_DB_URI
      : process.env.PROD_DB_URI,
  MONGO_OPTIONS: {
    keepAlive: true,
    useNewUrlParser: true,
  },

  PASSWORD_REGEX: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  EMAIL_REGEX:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
};
