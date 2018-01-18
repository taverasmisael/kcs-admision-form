import styled from 'styled-components'
import PropTypes from 'prop-types'

import LogoImage from './images/logo.jpg'

const LogoSizes = {
  tiny: '5rem',
  small: '10rem',
  medium: '15rem',
  large: '20rem',
  huge: '40rem'
}

const Logo = styled.img.attrs({ src: LogoImage })`
  max-width: 100%;
  height: auto;
  display: inline-block;
  width: ${props => LogoSizes[props.size]};
`

Logo.propTypes = {
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
}

export default Logo
