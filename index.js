const express = require('express');
const cors = require('cors');
const weatherRouter = require('./Routes/weather');

const app = express();

app.use(cors());
app.use(express.json());

// Weather route
app.use('/api/weather', weatherRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));