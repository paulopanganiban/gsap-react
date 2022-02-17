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
  backdrop-filter: var(--backdrop-filter-blur);
  background-color: var(--white-alpha-25);
  border: 1px solid var(--white-alpha-40);
  min-height: 90vh;
  border-radius: 30px;
`