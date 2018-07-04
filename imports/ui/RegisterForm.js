import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

class RegisterForm extends Component {
  email = React.createRef();
  password = React.createRef();

  registerUser = event => {
    event.preventDefault();

    Accounts.createUser(
      {
        email: this.email.current.value,
        password: this.password.current.value,
      },
      error => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.registerUser}>
        <input type="email" ref={this.email} />
        <input type="password" ref={this.password} />

        <button>Register User</button>
      </form>
    );
  }
}

export default RegisterForm;
