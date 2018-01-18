import React, { Component } from 'react';

import Intro from '../components/Intro'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
