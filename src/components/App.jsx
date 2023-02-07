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
