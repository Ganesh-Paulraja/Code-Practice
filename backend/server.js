const express = require('express');
const errorHandler = require('./midleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
