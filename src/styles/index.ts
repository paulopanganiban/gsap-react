import styled, { css } from 'styled-components'

export const GradientText = css`
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
export const ContainerWidth = css`
  width: 50%;
  padding: 15px;
`;
export const DisplayFlexAlignItemsCenter = css`
    display: flex;
    align-items: center;
`
export const Section = styled.section`
  display: flex;
  backdrop-filter: var(--backdrop-filter-blur);
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  min-height: calc(100vh - 70px);
  border-radius: 30px;
`
export const Button = css`
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
`