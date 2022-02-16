import React from "react";
import styled from "styled-components";
import { displayFlexAlignItemsCenter } from "../styles";

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

const HeroContainer = styled.section`
  backdrop-filter: var(--backdrop-filter-blur);
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
    font-weight: 300;
    margin: 0 0 30px;
  }
  .home-text > a {
    margin: 0 15px 15px 0;
    line-height: 1.5;
    background-color: var(--white-alpha-25);
    padding: 10px 28px;
    display: inline-block;
    border-radius: 30px;
    border: 1px solid var(--white-alpha-40);
    color: var(--main-color);
    text-transform: capitalize;
    font-family: inherit;
    font-size: 16px;
    user-select: none;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    &:before {
      content: "";
      transition: width 0.3s ease;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background-color: var(--main-color);
      z-index: -1;
    }
    &:hover::before {
      width: 100%;
    }
    &:hover {
      color: var(--white);
    }
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
