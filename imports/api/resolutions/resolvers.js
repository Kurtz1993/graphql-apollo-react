import Resolutions from "./resolutions";

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    },
  },
  Mutation: {
    // Second parameter is args object, which contains an object
    // with all the data passed to the mutation
    createResolution(obj, { name }, context) {
      const resolutionId = Resolutions.insert({
        name,
      });

      return Resolutions.findOne(resolutionId);
    },
  },
};
