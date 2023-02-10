import styled from 'styled-components'
import { Routes, Route, Outlet, Link } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import Header from './Header/Header'
import Content from './Main/Content'
import Footer from './Footer/Footer'
import Gallery from './Main/Gallery/Gallery'
import About from './Main/About/About'
import TOS from './Main/TOS/TOS'

function App() {
  //   primary color - hsl(193 71% 85%)
  // secondary color - hsl(141 71% 85%) or hsl(123 71% 85%)
  // accent - {
  //   hex: FFB56B
  //   hsl(30 100% 74%)
  // }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Content />}>
          <Route index element={<Gallery />} />
          <Route path='about' element={<About />} />
          <Route path='tos' element={<TOS />} />
        </Route>
      </Routes>
      <Footer />
      <GlobalStyles />
      {/* <img src='https://via.placeholder.com/250.png/ ' alt='placeholder' /> */}
    </>
  )
}

export default App
