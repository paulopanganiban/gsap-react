import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <HeaderContainer>
        <LogoSection>
          <span>
            <h3>P</h3>
          </span>
          <p>Paulo Panganiban</p>
        </LogoSection>
        <Hamburger />
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.header`
  box-shadow: var(--bs);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoSection = styled.section`
  display: flex;
  align-items: center;
  > span {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--light-orchid);
    > h3 {
      margin: 0;
      color: #fff;
    }
  }
  > p {
    margin-left: 0.2rem;
    font-weight: bold;
  }
`;
