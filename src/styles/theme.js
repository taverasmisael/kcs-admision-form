import { createMuiTheme } from 'material-ui'
import Palette from './Palette'

const DefaultTheme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: {
      light: Palette.primary[300],
      main: Palette.primary[500],
      dark: Palette.primary[700],
      contrastText: DefaultTheme.palette.getContrastText(Palette.primary[500])
    },
    secondary: {
      light: Palette.accent.A200,
      main: Palette.accent.A400,
      dark: Palette.accent.A700,
      contrastText: DefaultTheme.palette.getContrastText(Palette.accent.A400)
    },
    error: Palette.error
  }
})
