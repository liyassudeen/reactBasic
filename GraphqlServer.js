let express = require('express');
var cors = require('cors'); 
const app = express();
var { buildSchema } = require('graphql');
var graphqlHTTP = require('express-graphql');
var path = require('path');

app.use(cors()); // For cross origin allow access

var schema = buildSchema(`
    type Query {
        login: String
        createAccount: String
    }
`);

// Root resolver
var root = {
    login: () => 'Login Button Clicked!',
    createAccount: () => 'Create Account Button Clicked!'
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

var server=app.listen(5000,function() {console.log('Listening on port 5000!')});  