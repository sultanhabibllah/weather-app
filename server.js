const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// ==== YOUR OPENWEATHERMAP API KEY ====
const WEATHER_API_KEY = '1b1ead894877bf8646017819fb864fa8';
// =====================================

app.use(cors());
app.use(express.json());

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Weather API route
app.get('/api/weather', async (req, res) => {
  const { city = '' } = req.query;
  if (!city) {
    return res.status(400).json({ error: 'City is required.' });
  }

  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: WEATHER_API_KEY,
          units: 'metric'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    // Log detailed error for debugging
    if (error.response) {
      console.error('WEATHER API ERROR:', error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('WEATHER API ERROR:', error.message);
      res.status(500).json({ error: 'Failed to fetch weather data.' });
    }
  }
});

// Fallback: Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
