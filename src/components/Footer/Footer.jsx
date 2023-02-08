import styled from 'styled-components'

function Footer() {
  return <Wrapper>Footer</Wrapper>
}

const Wrapper = styled.footer`
  background-color: hsl(123 71% 85%);
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 4px 4px hsl(193 50% 50% / 0.333),
    4px 8px 8px hsl(193 50% 50% / 0.333), 6px 8px 8px hsl(193 50% 50% / 0.333);
`

export default Footer
