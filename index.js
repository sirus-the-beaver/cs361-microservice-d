const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const wineRoutes = require('./routes/wineRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(wineRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});