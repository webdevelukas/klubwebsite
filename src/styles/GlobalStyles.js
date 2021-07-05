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
    --highlight-color-shadow: hsla(0, 100%, 55%, 15%);
    --highlight-color-overlay: hsla(0, 100%, 55%, 75%);
    --max-content-width: 1366px;
    --max-page-width: 1920px;
    --content-background: hsl(0, 0%, 100%);
    --content-background-overlay: hsla(0, 0%, 100%, 75%);
    --content-background-alternative: #efefef;
    --extra-small-spacing: 0.25rem;
    --small-spacing: 0.5rem;
    --medium-spacing: 1rem;
    --large-spacing: 2rem;
    --extra-large-spacing: 3rem;
    --border-radius: 3px;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
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
    color: var(--highlight-color);
  }
`}`;
