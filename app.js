const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: "https://effervescent-gaufre-f05d8c.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.get('/api/info', (req, res) => {
    res.json({message: "Welcome to the Mini Blog - Message from API"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('backend running...');
});
