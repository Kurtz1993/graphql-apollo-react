import Resolutions from "./resolutions";

const res = Resolutions.find({}).fetch();

export default {
  Query: {
    resolutions() {
      return res;
    },
  },
};
