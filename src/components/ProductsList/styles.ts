import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'clothes'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'cor2' ? cores.cor2 : cores.cor3};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'cor2' ? cores.cor3 : cores.cor2};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
