import React from "react";
import gql from "graphql-tag";
import { graphql, withApollo } from "react-apollo";

import RegisterForm from "./RegisterForm";
import ResolutionForm from "./ResolutionForm";
import LoginForm from "./LoginForm";

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;

  return (
    <div>
      {user._id ? (
        <button
          type="button"
          onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
        >
          Logout
        </button>
      ) : (
        <React.Fragment>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </React.Fragment>
      )}
      <ResolutionForm />
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
    user {
      _id
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data }),
})(withApollo(App));
