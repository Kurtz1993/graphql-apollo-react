import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution {
    createResolution {
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

  submitForm = () => {
    console.log(this.name.current.value);
    this.props.createResolution();
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
