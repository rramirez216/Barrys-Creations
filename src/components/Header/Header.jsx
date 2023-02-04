import styled from 'styled-components'
import Nav from './Nav'

function Header() {
  return (
    <Wrapper>
      <Logo>
        <Span>Barry's Creations</Span>
      </Logo>
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  background-color: hsl(0 0% 99%);
  padding: 16px 0px 16px 32px;
  /* border-top-left-radius: 32px 16px;
  border-bottom-right-radius: 32px 16px; */
  box-shadow: 2px 4px 4px hsl(193 50% 50% / 0.333),
    4px 8px 8px hsl(193 50% 50% / 0.333), 6px 8px 8px hsl(193 50% 50% / 0.333);
`
const Logo = styled.div``
const Span = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 900;
`

export default Header
