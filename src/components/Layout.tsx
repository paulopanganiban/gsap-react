import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
type LayoutTypes = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutTypes) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
const LayoutContainer = styled.div``;
