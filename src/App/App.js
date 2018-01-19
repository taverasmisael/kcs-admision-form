import React, { Component } from 'react';

import Intro from '../components/Intro'
import Footer from '../components/Footer'
import AdmisionForm from '../AdmisionForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <AdmisionForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
