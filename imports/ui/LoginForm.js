import React, { Component } from "react";

class LoginForm extends Component {
  email = React.createRef();
  password = React.createRef();

  login = event => {
    event.preventDefault();

    Meteor.loginWithPassword(
      this.email.current.value,
      this.password.current.value,
      error => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <input type="email" ref={this.email} />
        <input type="password" ref={this.password} />

        <button>Login User</button>
      </form>
    );
  }
}

export default LoginForm;
