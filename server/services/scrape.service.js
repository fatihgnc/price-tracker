const axios = require('axios');
const cheerio = require('cheerio');
const { getScrapeParams } = require('../helpers/request');

/*
  https://www.hepsiburada.com/vestel-65u9600-65-164-ekran-uydu-alicili-4k-ultra-hd-smart-led-tv-p-HBCV00000HZUUK?magaza=Hepsiburada
  https://www.trendyol.com/dr-pan/rice-cream-cikolatali-400-gr-p-76103988
  https://www.bershka.com/tr/triko-v-yaka-s%C3%BCveter-c0p114211574.html?colorId=251 
  https://www.zara.com/tr/en/sebastian-curi-graphic-t-shirt-p00679317.html?v1=202057904&v2=2112866
*/

module.exports = {
  async scrapePrice(url) {
    const options = {
      url,
      method: 'get',
      headers: {},
    };

    const { priceSelector, userAgent } = getScrapeParams(url);
    if (userAgent) options.headers['User-Agent'] = userAgent;

    try {
      const res = await axios(options);
      const $ = cheerio.load(res.data);
      const price = $(priceSelector).text();
      return price;
    } catch (error) {
      throw error;
    }
  },
};
