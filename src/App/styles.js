export default theme => ({
  container: {
    margin: `0 auto ${theme.spacing.unit * 1.5}px auto`,
    '@media (min-width: 960px)': {
      maxWidth: '90%'
    }
  }
})
