import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroContainer>
        <h1>Creative</h1>
        <h2>Process</h2>
        <p>Learn how to find inspiration in the things you love.</p>
        <button>READ MORE</button>
        <div className="images">
            <div>image</div>
            <div>image</div>
            <div>image</div>
            <div>image</div>
        </div>
    </HeroContainer>
  )
}

export default Hero
const HeroContainer = styled.div``