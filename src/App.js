import React, { Component } from 'react';
import Greeting from './components/Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting name="Sarah" />
      </div>
    );
  }
}

export default App;
