import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`${css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    --main-color: hsl(0, 100%, 25%);
    --main-color-shadow: hsla(0, 100%, 25%, 15%);
    --main-color-overlay: hsla(0, 100%, 25%, 75%);
    --text-color: hsl(0, 100%, 5%);
    --highlight-color: hsl(0, 100%, 55%);
    --max-content-width: 1366px;
    --content-background: white;
    --content-background-alternative: #efefef;
    --small-spacing: 0.5rem;
    --medium-spacing: 1rem;
    --large-spacing: 2rem;
    --border-radius: 3px;

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
  button,
  input,
  select,
  textarea {
    font-size: 1rem;
    border: unset;
    font-family: inherit;
    padding: unset;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
`}`;
