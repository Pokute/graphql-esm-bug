import { GraphQLServer } from 'graphql-yoga';
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

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
const instance = server.start(); // defaults to port 4000
