import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
html {
  font-family: Cairo, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  
}
body {
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  background: rgb(224, 224, 224);
  overflow-x: hidden;
}
button, input, select, textarea {
  font-size: 1rem;
  border: unset;
  font-family: inherit;
  padding: unset;
}
p, h1, h2, h3, h4, h5, h6 {margin:0;}

a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

`;
