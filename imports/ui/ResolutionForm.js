import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

@graphql(createResolution, {
  name: "createResolution",
})
class ResolutionForm extends Component {
  state = {};
  name = React.createRef();

  submitForm = async () => {
    try {
      await this.props.createResolution({
        variables: {
          name: this.name.current.value,
        },
      });

      this.name.current.value = "";
      this.props.refetch();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.name} />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default ResolutionForm;
