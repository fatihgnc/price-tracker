const express = require('express');
const cors = require('cors');
const { scrapePrice } = require('./services/scrape.service');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  try {
    const price = await scrapePrice(req.body.url);
    return res.json({ price });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.listen(PORT, () => console.info('Server listening on port ' + PORT));
