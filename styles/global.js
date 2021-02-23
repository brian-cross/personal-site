import css from "styled-jsx/css";
import { background, font, scrollbar } from "./theme";

export default css.global`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

  html {
    font-size: clamp(12px, 1.5vw, 16px);
    height: 100%;
    // Prevent scrollbar from shifting content
    width: 100vw;
    overflow-x: hidden;
  }

  body,
  #__next {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${background.site};
    font-family: Rubik, sans-serif;
    color: ${font.primary};
    user-select: none;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3 {
    margin: 1.25em 0;
  }

  p {
    margin: 1.5em 0;
    line-height: 1.5em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${scrollbar.thumb} ${scrollbar.track};
  }

  $scrollbar-width: 6px;

  ::-webkit-scrollbar {
    width: $scrollbar-width;
  }

  ::-webkit-scrollbar-track {
    background-color: ${scrollbar.track};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${scrollbar.thumb};
    border-radius: $scrollbar-width;
  }
`;
