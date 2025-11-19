const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('/api/info', (req, res) => {
    res.json({message: "Welcome to the Mini Blog - Message from API"});
});

app.listen(5000, () => {
    console.log('baclemd runnig on https://localhost:5000');
});