import React, { Component } from 'react';

import Divider from 'material-ui/Divider'

import Intro from '../components/Intro'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Divider light />
      </React.Fragment>
    );
  }
}

export default App;
