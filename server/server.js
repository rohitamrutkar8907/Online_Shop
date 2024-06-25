const express = require('express')
const cors = require('cors')
const utils = require('./utils')
const jwt = require('jsonwebtoken')
const config = require('./config')


const app = express()
app.use(cors())
app.use(express.json())



const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use('/users', usersRouter);
app.use('/products', productRouter);


app.listen(config.serverport, () => {
  console.log(`Server is listening on port ${config.serverport}`);
});


