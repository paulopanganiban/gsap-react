import React, { useState } from "react";
import styled from "styled-components";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <HamburgerContainer>
      <span className="bar1"></span>
      <span className="bar2"></span>
      <span className="bar3"></span>
    </HamburgerContainer>
  );
};

export default Hamburger;
const HamburgerContainer = styled.nav`
  cursor: pointer;
  border-radius: 50%;
  height: 67px;
  width: 67px;
  background-color: red;
  .bar1,
  .bar2,
  .bar3 {
    display: block;
    width: 20px;
    height: 3px;
    background-color: white;
    margin: 2px 0;
    transition: 0.4s;
  }
`;
