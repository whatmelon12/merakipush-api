const express = require('express');

const merakiRoutes = require('./routes/merakiRoutes');

const app = express();
const port = process.env.port || 3000;

merakiRoutes(app);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});
