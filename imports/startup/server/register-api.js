import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/resolutions.graphql";

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;
const typeDefs = [ResolutionsSchema, testSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    },
    resolutions() {
      return [
        {
          _id: "1",
          name: "Get stuff done!",
        },
        {
          _id: "fdafafafdaf",
          name: "Lose some wieght!",
        },
      ];
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});
