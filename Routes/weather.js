const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

// Route to fetch weather by city
router.get('/:city', async (req, res) => {
    const { city } = req.params;
    console.log(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;