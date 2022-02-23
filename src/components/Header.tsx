import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { HeaderContext } from "../context/HeaderContext";
import { gsap } from 'gsap'

const Header = () => {
  const ref = useRef(null)
  const q = gsap.utils.selector(ref)
  const { headerIsOpen, toggleHeader } = useContext(HeaderContext);
  const tl = gsap.timeline({
    paused: true
  })
  useEffect(() => {
    // tl.fromTo(ref.current, {
    //   duration: 1,
    //   opacity: 0,
    // }, {
    //   opacity: 1
    // })
  }, []);

  return (
    <HeaderContainer ref={ref} className="active">
      <div className="container">
        <div className="row flex-end">
          <button
            className="nav-toggler"
            onClick={() => {
              tl.restart()
              toggleHeader(!headerIsOpen);
            }}
          >
            <span></span>
          </button>
          <nav className={`nav ${headerIsOpen ? 'active' : ''}`}>
            <div className="nav-inner">
              <ul>
                <li>
                  <a href="#" className="nav-item">
                    home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-item">
                    about
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-item">
                    portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-item">
                    contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 20px 0 0;
  .flex-end {
    justify-content: flex-end;
  }
  .nav-toggler {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: var(--white-alpha-25);
    border: 1px solid var(--white-alpha-40);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    z-index: 1;
  }
  span {
    width: 24px;
    height: 2px;
    background-color: var(--main-color);
    position: relative;
    &:hover::before,
    &:hover::after {
      width: 50%;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--main-color);
      transition: all 0.3s ease;
    }
    &:before {
      left: 0;
      transform: translateY(-8px);
    }
    &:after {
      right: 0;
      transform: translateY(8px);
    }
  }
  .nav {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 35px 15px;
    overflow-y: auto;
    display: none;
    &.active {
      display: block;
    }
  }
  .nav-inner {
    min-height: calc(100vh - 70px);
    max-width: 1300px;
    margin: auto;
    background-color: var(--white-alpha-25);
    border: 1px solid var(--white-alpha-40);
    backdrop-filter: var(--backdrop-filter-blur);
    padding: 50px 0;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li {
    text-align: center;
    position: relative;
  }
  a {
    font-size: 2.5rem;
    text-transform: capitalize;
    color: var(--blue-dark);
    display: block;
    font-weight: 600;
    padding: 8px 15px;
    transition: color 0.3s ease;
    &:hover {
      color: var(--main-color);
    }
    &:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 50%;
      background-color: var(--white-alpha-25);
      z-index: -1;
      transform: width 0.5s ease;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
