import React, { Fragment, PureComponent } from 'react'

import Intro from '../components/Intro'
import Footer from '../components/Footer'
import AdmisionForm from '../AdmisionForm'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Intro />
        <main className={this.props.classes.container}>
          <AdmisionForm />
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)
