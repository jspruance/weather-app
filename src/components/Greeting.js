import React, { Component } from 'react';

class Greeting extends Component {

  state = {
    username: "Jane",
    isLoggedIn: false
  }

  render() {
    if (this.state.isLoggedIn) {
      return <h1>Hello {this.state.username}</h1>;
    }else {
      return <p>Please sign up or log in.</p>
    }
  }
}

export default Greeting;