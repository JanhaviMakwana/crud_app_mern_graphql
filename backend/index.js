
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./app/graphql/schema');
const resolvers = require('./app/graphql/resolvers');
const { appPort, dbUrl } = require('./app/config/app.config');


const app = express();

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type', 'Origin', 'authorization'],
    'credentials': true,
    'origin': 'http://localhost:3000',
    'methods': 'GET, HEAD, PUT,POST,DELETE'
}));


app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));


app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql:true
}))

const server = require('http').createServer(app);

mongoose.Promise = global.Promise;

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connection has been established!")
        server.listen(appPort);
    })
    .catch(err => {
        console.log("err");
        console.log(err);
    })
