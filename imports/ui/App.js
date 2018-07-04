import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import RegisterForm from './RegisterForm';
import ResolutionForm from "./ResolutionForm";
import LoginForm from "./LoginForm";

const App = ({ loading, resolutions }) => {
  if (loading) return null;

  return (
    <div>
      <RegisterForm />
      <ResolutionForm />
      <LoginForm />
      <ul>
        {resolutions &&
          resolutions.map(resolution => (
            <li key={resolution._id}>{resolution.name}</li>
          ))}
      </ul>
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data }),
})(App);
