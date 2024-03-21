// @ts-nocheck
import { expensive as queryExpensiveResolver } from "./schema/Query";
import { hello as queryHelloResolver } from "./schema/Query";
import { GraphQLSchema, GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
export function getSchema(): GraphQLSchema {
    const UserType: GraphQLObjectType = new GraphQLObjectType({
        name: "User",
        fields() {
            return {
                id: {
                    name: "id",
                    type: new GraphQLNonNull(GraphQLString)
                },
                name: {
                    name: "name",
                    type: new GraphQLNonNull(GraphQLString)
                }
            };
        }
    });
    const QueryType: GraphQLObjectType = new GraphQLObjectType({
        name: "Query",
        fields() {
            return {
                expensive: {
                    name: "expensive",
                    type: new GraphQLNonNull(UserType),
                    resolve(source) {
                        return queryExpensiveResolver(source);
                    }
                },
                hello: {
                    name: "hello",
                    type: new GraphQLNonNull(GraphQLString),
                    resolve(source) {
                        return queryHelloResolver(source);
                    }
                }
            };
        }
    });
    return new GraphQLSchema({
        query: QueryType,
        types: [QueryType, UserType]
    });
}
