import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

import ResolutionSchema from "../../api/resolutions/resolution.graphql";
import ResolutionsResolver from "../../api/resolutions/resolvers";

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;
const typeDefs = [ResolutionSchema, testSchema];
console.log(ResolutionSchema);


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
