
const express = require('express');

const app = express();
const port = 3000;


app.listen(port).then(() => {
    console.log(`Server started at ${port}`);
});
