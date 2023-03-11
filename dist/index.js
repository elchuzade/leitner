"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./schema/schema');
require('dotenv').config();
const app = express();
connectDB();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
const port = process.env.PORT;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
