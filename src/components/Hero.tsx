import React from "react";
import styled from "styled-components";
import { Button, DisplayFlexAlignItemsCenter, Section } from "../styles";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <div className="row">
          <div className="home-text">
            <p>Hello, I&rsquo;m</p>
            <h1>pau panganiban</h1>
            <h2>front end developer</h2>
            <a href="#">more about me</a>
            <a href="#">portfolio</a>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src="/profile-img.png" alt="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled(Section)`
  ${DisplayFlexAlignItemsCenter};
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
    font-weight: 300;
    margin: 0 0 30px;
  }
  .home-text > a {
    ${Button};
  }
  .home-text,
  .home-img {
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
