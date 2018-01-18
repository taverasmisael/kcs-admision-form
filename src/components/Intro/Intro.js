import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'
import Logo from '../Logo'

import styles from './styles'

const Intro = ({ classes }) => (
  <Grid container component="header" alignItems="center">
    <Grid item xs={12} sm={2}>
      <Logo size="small" />
    </Grid>
    <Grid item xs={12} sm={10}>
      <Typography gutterBottom type="headline" color="primary">
        Admision Form
      </Typography>
      <Typography paragraph type="subheading" className={classes.subheading}>
        Welcome to The Place to Learn’s website. We pride ourselves in delivering the best education possible to our
        students, which is demonstrated through our Outstanding Ofsted inspection
      </Typography>
    </Grid>
  </Grid>
)

Intro.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Intro)
