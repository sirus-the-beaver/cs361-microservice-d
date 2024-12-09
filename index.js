const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const wineRoutes = require('./routes/wineRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();
const app = express();
app.use(cors(
    {
        origin: 'https://dishfindr-4d3c3b6f3b94.herokuapp.com/'    
    }
));
app.use(express.json());

app.use(authMiddleware);
app.use(wineRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});