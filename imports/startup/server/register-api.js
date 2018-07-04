import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionSchema from "../../api/resolutions/resolution.graphql";
import ResolutionsResolvers from "../../api/resolutions/resolvers";
import UsersResolvers from "../../api/users/resolvers";
import UserSchema from "../../api/users/user.graphql";

const typeDefs = [ResolutionSchema, UserSchema];

const resolvers = merge(ResolutionsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
