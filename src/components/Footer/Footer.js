import React from 'react'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

import Logo from '../Logo'

const Footer = () => (
  <Grid container component="footer" alignItems="center" justify="center">
    <Grid item xs={2}>
      <Logo size="tiny" />
    </Grid>
    <Grid item xs={2}>
      <Typography type="caption" gutterBottom>
        All rights reserved
      </Typography>
    </Grid>
  </Grid>
)

export default Footer
