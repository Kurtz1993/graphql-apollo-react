import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionsSchema from "../../api/resolutions/resolutions.graphql";
import ResolutionsResolver from "../../api/resolutions/resolvers";

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;
const typeDefs = [ResolutionsSchema, testSchema];

const testResolver = {
  Query: {
    hi() {
      return "Hello Level Up";
    },
  },
};

const resolvers = merge(testResolver, ResolutionsResolver);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
