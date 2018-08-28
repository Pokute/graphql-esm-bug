const { GraphQLServer } = require('graphql-yoga');
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require("graphql");

var Something = new GraphQLObjectType({
    fields: {
        else: { type: GraphQLString },
    },
    name: 'Something',
})

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        fields: {
            something: {
                type: Something,
            },
        },
        name: 'Query',
    }),
});

var server = new GraphQLServer({ schema });
server.start(); // defaults to port 4000
