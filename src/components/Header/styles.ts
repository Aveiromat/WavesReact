import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const Border = styled.div`
  border: 1px solid black;
`

export const HeaderBar = styled.header`
  background-color: ${colors.color3};
  padding: 16px 24px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 2px solid #000;

  a,
  span {
    color: ${colors.color1};
    text-decoration: none;
    font-weight: bold;
    align-items: center;
  }

  h1 {
    line-height: 0;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
`

export const Logo = styled.img``

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 4px;
    display: block;
    width: 100%;
    background-color: ${colors.color1};
    margin: 4px 0;
    border-radius: 8px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`
