import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'clothes'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? cores.cor2 : cores.cor3};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? cores.cor3 : cores.cor2};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
