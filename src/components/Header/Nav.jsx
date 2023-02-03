import React from 'react'
import styled from 'styled-components'

function Nav() {
  let links = ['Gallery', 'About Me', 'TOS']
  return (
    <Wrapper>
      <Logo>
        <Span>Barry's Creations</Span>
      </Logo>
      <List>
        {links.map((title, index) => (
          <Li key={index}>
            <Link>{title}</Link>
          </Li>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  background-color: hsl(0 0% 99%);
  padding: 16px 0px 16px 32px;
  border-top-left-radius: 32px 16px;
  border-bottom-right-radius: 32px 16px;
  box-shadow: 2px 4px 4px hsl(193 50% 50% / 0.333),
    4px 8px 8px hsl(193 50% 50% / 0.333), 6px 8px 8px hsl(193 50% 50% / 0.333);
`
const Logo = styled.div``
const Span = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 900;
`
const List = styled.ul`
  display: flex;
  gap: 32px;
  align-items: baseline;
  justify-content: center;
  flex: 4 0 0;
`
const Li = styled.li``

const Link = styled.a`
  display: block;
  padding: 8px 16px;
`

export default Nav
