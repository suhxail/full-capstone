const express=require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')

app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);  
app.get("/", (req, res) => {
  return res.status(200).send("Hello Welcome to Auth API");
});
module.exports = app;