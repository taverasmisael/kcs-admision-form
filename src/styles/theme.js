import { createMuiTheme } from 'material-ui'
import color from 'color'

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
    }
  },
  overrides: {
    MuiInput: {
      root: {
        padding: 0
      },
      formControl: {
        'label + &': {
          marginTop: DefaultTheme.spacing.unit * 3,
          '& > *:not(input)': {
            height: '100%!important'
          }
        }
      },
      input: {
        borderRadius: DefaultTheme.spacing.unit / 2,
        backgroundColor: DefaultTheme.palette.common.white,
        border: `1px solid ${Palette.primary[100]}`,
        padding: `${DefaultTheme.spacing.unit + 4}px ${DefaultTheme.spacing.unit}px `,
        width: 'calc(100% - 24px)',
        transition: DefaultTheme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
          borderColor: color(Palette.primary.A400)
            .alpha(0.5)
            .toString(),
          boxShadow: `0 0 0 2px ${color(Palette.primary.A400).alpha(0.25)}`
        }
      },
      disabled: {
        '& input': {
          backgroundColor: 'rgba(191, 191, 191, 0.21)',
          color: '#383838'
        }
      },
      error: {
        '&:after': {
          backgroundColor: 'transparent',
        },
        '& input:focus': {
          borderColor: color(DefaultTheme.palette.error.main)
            .alpha(0.5)
            .toString(),
          boxShadow: `0 0 0 2px ${color(DefaultTheme.palette.error.main).alpha(0.25)}`
        }
      },
      inkbar: {
        '&$focused:after': {
          backgroundColor: 'transparent'
        }
      },
      underline: {
        '&:before, &:hover:before': {
          backgroundColor: 'transparent!important'
        },
        '&$disabled:before': {
          background: 'transparent',
          backgroundImage: 'none'
        }
      }
    }
  }
})
