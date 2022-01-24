const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
const typeDefs = gql(fs.readFileSync(__dirname + '/resources/game.graphql', {encoding: 'utf-8'}));
const resolvers =  require(__dirname + '/resources/game.js');

const app = express();

app.use(express.json(), cors());
app.options('*', cors());

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen(process.env.PORT || 5000)
    .then(({ url }) => console.log(`Server is running on ${url}`)
);


// app.listen(process.env.PORT || 5000);
// console.log('Server is running');