module.exports = {
  HB_PRICE_SELECTOR: '#offering-price > span:nth-child(1)',
  TY_PRICE_SELECTOR:
    '#product-detail-app > div > div.flex-container > div.product-container > div:nth-child(2) > div.container-right-content > div.pr-in-w > div > div > div.product-price-container > div > div > span',
  ZARA_PRICE_SELECTOR:
    '#main > article > div.product-detail-view__content > div.product-detail-view__main > div.product-detail-view__side-bar > div.product-detail-info > div.product-detail-info__price > div > span > span > span',
  BERSHKA_PRICE_SELECTOR:
    '#main-content > section > section > section.main-content > div.content-row.main-row > section > div > div.top-group > div.price-elem.price-grid > span',
  AMAZON_PRICE_SELECTORS: 'span.a-offscreen',

  AMAZON: 'amazon',
  HEPSIBURADA: 'hepsiburada',
  TRENDYOL: 'trendyol',
  BERSHKA: 'bershka',
  ZARA: 'zara',
  USER_AGENT:
    'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36',
  AMAZON_PRICE_REPLACER_REGEX: /(\s\s+)/gi,
};
