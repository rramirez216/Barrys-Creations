import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

function Nav() {
  return (
    <Wrapper>
      <List>
        <Li>
          <Link to='/'>GALLERY</Link>
        </Li>
        <Li>
          <Link to='about'>ABOUT ME</Link>
        </Li>
        <Li>
          <Link to='tos'>TOS</Link>
        </Li>
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  flex: 1 0 0;
`

const List = styled.ul`
  display: flex;
  gap: 32px;
`

const Link = styled(RouterLink)`
  display: block;
  padding: 4px;
  transition: font-weight 250ms ease-in-out, box-shadow 250ms ease;

  &:link,
  &:visited {
    text-decoration: none;
    color: black;
  }
`
const Li = styled.li`
  &:hover ${Link} {
    font-weight: 900;
    box-shadow: 0px 4px 0px hsl(30 100% 74% / 1);
  }
`

export default Nav
