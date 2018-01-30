import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid/Grid'
import FormControlLabel from 'material-ui/Form/FormControlLabel'
import FormControl from 'material-ui/Form/FormControl'
import Typography from 'material-ui/Typography/Typography'
import FormLabel from 'material-ui/Form/FormLabel'
import RadioGroup from 'material-ui/Radio/RadioGroup'
import Radio from 'material-ui/Radio/Radio'

import withStyles from 'material-ui/styles/withStyles'
import styles from '../styles'
import Checkbox from 'material-ui/Checkbox/Checkbox'

const VaccineCard = ({ vaccines = {}, onChange, classes }) => (
  <Fragment>
    <Typography type="title">Ficha de Control de Vacunación</Typography>
    <Grid container spacing={16}>
      <Grid item xs={12} sm={3}>
        <FormControlLabel
          control={
            <Checkbox
              name="tuberculosis"
              title="Tuberculosis"
              checked={vaccines.tuberculosis.value}
              onChange={onChange}
            />
          }
          label="Tuberculosis"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControlLabel
          control={
            <Checkbox name="hepatitis" title="Hepatitis" checked={vaccines.hepatitis.value} onChange={onChange} />
          }
          label="Hepatitis"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControlLabel
          control={
            <Checkbox name="varicela" title="Varicela" checked={vaccines.varicela.value} onChange={onChange} />
          }
          label="Varicela"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControlLabel
          control={
            <Checkbox name="influenza" title="Influenza" checked={vaccines.influenza.value} onChange={onChange} />
          }
          label="Influenza"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Pentavalente</FormLabel>
          <RadioGroup
            row
            aria-label="Pentavalente"
            name="pentavalente"
            className={classes.group}
            value={vaccines.pentavalente.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="Segunda" control={<Radio />} label="2da" />
            <FormControlLabel value="Tercera" control={<Radio />} label="3ra" />
            <FormControlLabel value="R" control={<Radio />} label="R" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Polio</FormLabel>
          <RadioGroup
            row
            aria-label="Polio"
            name="polio"
            className={classes.group}
            value={vaccines.polio.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="Segunda" control={<Radio />} label="2da" />
            <FormControlLabel value="Tercera" control={<Radio />} label="3ra" />
            <FormControlLabel value="R1" control={<Radio />} label="R1" />
            <FormControlLabel value="R2" control={<Radio />} label="R2" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Neumococo</FormLabel>
          <RadioGroup
            row
            aria-label="Neumococo"
            name="neumococo"
            className={classes.group}
            value={vaccines.neumococo.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="Segunda" control={<Radio />} label="2da" />
            <FormControlLabel value="Tercera" control={<Radio />} label="3ra" />
            <FormControlLabel value="R" control={<Radio />} label="R" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Rotavirus</FormLabel>
          <RadioGroup
            row
            aria-label="Rotavirus"
            name="rotavirus"
            className={classes.group}
            value={vaccines.rotavirus.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="Segunda" control={<Radio />} label="2da" />
            <FormControlLabel value="Tercera" control={<Radio />} label="3ra" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Triple Viral (SRP)</FormLabel>
          <RadioGroup
            row
            aria-label="Triple Viral (SRP)"
            name="srp"
            className={classes.group}
            value={vaccines.srp.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="R" control={<Radio />} label="R" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Pentavalente</FormLabel>
          <RadioGroup
            row
            aria-label="Pentavalente"
            name="pentavalente"
            className={classes.group}
            value={vaccines.pentavalente.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="Segunda" control={<Radio />} label="2da" />
            <FormControlLabel value="Tercera" control={<Radio />} label="3ra" />
            <FormControlLabel value="R" control={<Radio />} label="R" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Hepatitis A</FormLabel>
          <RadioGroup
            row
            aria-label="Hepatitis A"
            name="hepatitisA"
            className={classes.group}
            value={vaccines.hepatitisA.value}
            onChange={onChange}
          >
            <FormControlLabel value="Primera" control={<Radio />} label="1ra" />
            <FormControlLabel value="R" control={<Radio />} label="R" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">DPT (a los 6 años)</FormLabel>
          <RadioGroup
            row
            aria-label="DPT (a los 6 años)"
            name="dpt"
            className={classes.group}
            value={vaccines.dpt.value}
            onChange={onChange}
          >
            <FormControlLabel value="2R" control={<Radio />} label="2R" />
            <FormControlLabel value="3R" control={<Radio />} label="3R" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={4}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">DT (10 años en adelante)</FormLabel>
          <RadioGroup
            row
            aria-label="DT (10 años en adelante)"
            name="dt"
            className={classes.group}
            value={vaccines.dt.value}
            onChange={onChange}
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  </Fragment>
)
VaccineCard.propTypes = {
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(VaccineCard)
