import color from 'color'
export default theme => ({
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  textFieldInput: {
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: color(theme.palette.primary.A400).alpha(.5).toString(),
      boxShadow: `0 0 0 2px ${color(theme.palette.primary.A400).alpha(.25)}`
    }
  }
})
