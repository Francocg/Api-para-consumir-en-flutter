const express = require('express'); 
const app = express();
const cors = require('cors');

app.use(express.json())
require('dotenv').config();

app.use('/', require('./routes/api'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port 3000`);
});