import React from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import withStyles from 'material-ui/styles/withStyles'

import Logo from '../Logo'

import styles from './styles'

const Intro = ({ classes }) => (
  <Grid container component="header" alignItems="center" className={classes.container}>
    <Grid item xs={12} sm={2}>
      <Logo size="small" />
    </Grid>
    <Grid item xs={12} sm={10}>
      <Typography gutterBottom type="headline" color="primary">
        Formulario de Admision
      </Typography>
      <Typography paragraph type="subheading" className={classes.subheading}>
        La reservación del cupo se realiza con la entrega de todos los documentos requeridos para cada grado, y el Pago
        del Plan A o la primera cuota de los Planes B y C. Para mas información sobre el proceso{' '}
        <a href="/docs/PROCESO_DE_ADMISION_2018-2019.pdf" download>descargue aquí el documento</a> con el proceso detallado
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Divider light />
    </Grid>
  </Grid>
)

Intro.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Intro)
