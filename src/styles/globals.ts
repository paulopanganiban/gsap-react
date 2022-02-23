import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
 @font-face {
   font-family: "Averta";
   src: url('/fonts/averta.otf');
   font-weight: normal;
   font-style: normal;
 }
html {
    --main-color: #e02f6b;
    --blue: #0000ff;
    --blue-dark: #18293c;
    --orange: #ffa500;
    --green-yellow: #cddc39;
    --pink-light: #efa2b4;
    --cyan-light: #aef1ee;
    --white: #fff;
    --white-alpha-40: rgba(255, 255, 255, 0.40);
    --white-alpha-25: rgba(255, 255, 255, 0.25);
    --backdrop-filter-blur: blur(5px);

    --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);

    --bgc: #E3FDFD;
    --white: hsl(0, 0%, 100%);
    --black: #080808;
    --gray: #D2D2D2;
    --max-width: 1300px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    font-family: "Averta",--apple-system, 
    BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 
    'Helvetica Neue', sans-serif; 
}
body {
  background-attachment: fixed;
  padding: 5vh 15px;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, var(--pink-light), var(--cyan-light));
  &:before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: var(--green-yellow);
    z-index: -1;
    opacity: 0.12;
  }
}
main {
  max-width: var(--max-width);
  margin: auto;
}
a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  :hover {
      text-decoration: underline;
  }
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
  font-family: inherit;
  user-select: none;
}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1,h2 {
  font-weight: 600;
}
h3,h4,h5,h6 {
  font-weight: 500;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: var(--white);
}
::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
}
.container {
  padding: 0 40px;
  width: 100%;
}
.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

`