import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions(obj, args, { userId }) {
      return Resolutions.find({ userId }).fetch();
    },
  },
  Mutation: {
    // Second parameter is args object, which contains an object
    // with all the data passed to the mutation
    createResolution(obj, { name }, { userId }) {
      const resolutionId = Resolutions.insert({
        name,
        userId,
      });

      return Resolutions.findOne(resolutionId);
    },
  },
};
