export default theme => ({
  container: {
    padding: theme.spacing.unit * 3,
    marginLeft: (theme.spacing.unit + 4)
  },
  text: {
    marginTop: theme.spacing.unit,
  },
  button: {
    marginRight: theme.spacing.unit
  },
  wrapper: {
    display: 'inline-block',
    margin: theme.spacing.unit,
    position: 'relative'
  },
  buttonProgress: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
})
