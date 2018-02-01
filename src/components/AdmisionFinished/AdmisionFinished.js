import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import withStyles from 'material-ui/styles/withStyles'
import styles from './styles'
import CircularProgress from 'material-ui/Progress/CircularProgress'

const AdmisionFinished = ({ classes, loading, success, error, onSubmit, resetForm }) => (
  <div className={classes.container}>
    {!success && (
      <Fragment>
        <Typography paragraph className={classes.text}>
          Ya ha completado el formulario de admisión, al presionar <strong>Enviar</strong> recibiremos su petición.
        </Typography>
        {error && (
          <Typography paragraph color="error">
            {error === '500' ? 'Error Interno del Servidor. Reintentar' : 'Error Inesperado. Reintentar.'}
          </Typography>
        )}
        <div className={classes.wrapper}>
          <Button raised color="primary" className={classes.button} disabled={loading} onClick={onSubmit}>
            {loading ? 'Enviando...' : 'Enviar' }
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </Fragment>
    )}
    {success !== 0 && (
      <div className={classes.wrapper}>
        <Typography type="title" color="primary">
          Formulario Enviado Con Exito
        </Typography>
        <Typography paragraph className={classes.text}>
          El siguiente paso es descargar los archivos correspondientes, imprimirlos, llenarlos y depositarlos en
          nuestras oficinas y el proceso estará completo.
        </Typography>
        <Typography paragraph type="subheading" className={classes.text}>
          Si desea inscribir otro niño/a (usando la información anterior) oprima el botón <strong>Otro niño/a</strong>{' '}
          una vez descargados los archivos.
        </Typography>
        <Button
          href={`/docs/admision${success}.zip`}
          download
          raised
          color="accent"
          className={classes.button}
          disabled={loading}
        >
          Descargar Archivos
        </Button>
        <Button color="primary" className={classes.button} disabled={loading} onClick={resetForm}>
          Otro niño/a
        </Button>
      </div>
    )}
  </div>
)

AdmisionFinished.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  success: PropTypes.number,
  error: PropTypes.string
}

export default withStyles(styles)(AdmisionFinished)
