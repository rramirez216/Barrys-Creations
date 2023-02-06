import React from 'react'
import lodash from 'lodash'
import styled from 'styled-components'

function Gallery() {
  return (
    <Wrapper>
      {lodash.range(10).map((value) => (
        <img
          key={value}
          src='https://via.placeholder.com/250.png/ '
          alt='placeholder'
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 32px;
`

export default Gallery
