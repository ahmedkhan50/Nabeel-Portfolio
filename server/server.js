const express = require('express');
const path = require('path');
let app = express();

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));


app.listen(port, () => {
    console.log(`server is up at port ${port}`);
});