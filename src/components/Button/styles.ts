import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.cor4 : cores.cor1)};
  color: ${cores.cor1};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.cor4 : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.cor4};
  color: ${cores.cor4};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
`
