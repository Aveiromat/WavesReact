import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.cor3};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.cor3};
    border-bottom: 1px solid ${cores.cor1};
    width: 100%;
  }
`
