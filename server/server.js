require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

app.get('/getgif/:q', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search',
    params: {
      api_key: process.env.GIPHY_KEY,
      q: req.params.q,
      limit: 10
    }
  })
    .then(apiRes => res.send(apiRes.data))
    .catch(err => res.sendStatus(500))
})

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
