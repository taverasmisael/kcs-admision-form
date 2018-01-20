import React, { Component } from 'react'

import Intro from '../components/Intro'
import Footer from '../components/Footer'
import AdmisionForm from '../AdmisionForm'
import ChildrenInfo from '../steps/ChildrenInfo'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <main className={this.props.classes.container}>
          <ChildrenInfo />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
