require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const merakiRoutes = require('./routes/merakiRoutes');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

merakiRoutes(app);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
