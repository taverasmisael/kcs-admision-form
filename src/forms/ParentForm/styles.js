export default theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'row wrap'
  },
  checkbox: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  switchLabel: {
    flexFlow: 'row-reverse',
    marginLeft: 0,
    marginRight: '-14px'
  },
  inputContainer: {
    width: '100%'
  },
  textarea: {
    minHeight: `${theme.spacing.unit / 2}rem`
  }
})
