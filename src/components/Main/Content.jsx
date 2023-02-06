import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Gallery from './Gallery/Gallery'

function Content() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 32px;
  background-color: hsl(123 71% 85%);
  border-radius: 16px;
  box-shadow: 2px 4px 4px hsl(193 40% 50% / 0.333),
    4px 8px 8px hsl(193 40% 50% / 0.333), 6px 12px 12px hsl(193 40% 50% / 0.333),
    8px 16px 16px hsl(193 40% 50% / 0.333),
    10px 20px 20px hsl(193 40% 50% / 0.333);
`

export default Content
