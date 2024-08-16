const express = require('express');
const errorHandler = require('./midleware/errorHandler');
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection')
const app = express();
app.use(express.json());


connectDb()

const port = process.env.PORT || 5000;

app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/users', require('./routes/userRoute'))
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
