import { createMuiTheme } from 'material-ui'
import Palette from './Palette'

const DefaultTheme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: {
      light: Palette.primary[300],
      main: Palette.primary[500],
      dark: Palette.primary[700],
      contrastText: DefaultTheme.palette.getContrastText(Palette.primary[500]),
      ...Palette.primary
    },
    secondary: {
      light: Palette.accent[300],
      main: Palette.accent[400],
      dark: Palette.accent[500],
      contrastText: DefaultTheme.palette.getContrastText(Palette.accent[500]),
      ...Palette.accent
    },
    error: Palette.error
  }
})
