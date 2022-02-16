import React from 'react'
import styled from 'styled-components';
import { displayFlexAlignItemsCenter } from '../styles';

const Hero = () => {
  return (
    <HeroContainer>
    <div className="container">
      <div className="row">
        <div className="home-text">
          <p>Hello, I&rsquo;m</p>
          <h1>pau panganiban</h1>
          <h2>front end developer</h2>
        </div>
        <div className="home-img">
          <div className="img-box">
            <img src="/profile-img.png" alt="profile-image" />
          </div>
        </div>
      </div>
    </div>
  </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.section`
 ${displayFlexAlignItemsCenter};
 padding: 120px 0;
 background-color: var(--white-alpha-25);
 border: 1px solid var(--white-alpha-40);
 min-height: 90vh;
 border-radius: 30px;
  .row {
    ${displayFlexAlignItemsCenter}
    flex-wrap: wrap;
  }
  .container {
    width: 100%;
    padding: 0 40px;
  }
  .home-text > p {
    font-size: 1.125rem;
  }
  .home-text > h1 {
    font-size: 3.125rem;
    text-transform: capitalize;
  }
  .home-text > h2 {
    font-size: 1.25rem;
    text-transform: capitalize;
  }
  .home-text, .home-img {
    width: 50%;
    padding: 15px;
  }
  .img-box {
    margin: auto;
    max-width: 360px;
    background-color: var(--white-alpha-25);
    border-radius: 50%;
    border: 8px solid var(--white-alpha-25);
  }
  .img-box > img {
    max-width: 100%;
    vertical-align: middle;
    width: 100%;
    border-radius: 50%;
  }
`;
