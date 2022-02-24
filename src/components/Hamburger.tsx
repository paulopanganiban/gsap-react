import React, { useState } from "react";
import styled from "styled-components";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <HamburgerContainer>
      <input type="checkbox" className="toggler" name="" id="" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
    </HamburgerContainer>
  );
};

export default Hamburger;
const HamburgerContainer = styled.nav`
  position: relative;
  /* show menu */
  .toggler:checked ~ .menu {
    visibility: visible;
  }
  .toggler:checked ~ .menu > div {
    transform: scale(1);
  }
  .toggler:checked ~ .menu > div > div {
    opacity: 1;
    transition: opacity 0.4s ease;
  }
  .menu-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .hamburger {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  /* hamburger-line */
  .hamburger > div {
    position: relative;
    width: 100%;
    height: 3px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    &:before,
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 3px;
      background-color: inherit;
    }
    &:after {
      top: 10px;
    }
  }
  /* Toggler Animate */
  .toggler:checked + .hamburger > div {
    transform: rotate(135deg);
  }
  /* Lines to X */
  .toggler:checked + .hamburger > div {
    &:before,
    &:after {
      top: 0;
      transform: rotate(90deg);
    }
  }
  /* Rotate on hover when checked */
  .toggler:checked:hover + .hamburger > div {
    transform: rotate(225deg);
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
    background-color: transparent;
  }
  .menu > div {
    background-color:transparent;
    width: 100vw;
    height: 100vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0)
    transition: all 0.4s ease;
  }
  .menu > div > div {
    text-align: center;
    max-width: 90vw;
    max-height: 100vh;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  li {
    font-size: 3rem;
    color: white;
    padding: 1rem;
  }
  a {
    transition: color: 0.4s ease;
  }
  .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
  }
`;
