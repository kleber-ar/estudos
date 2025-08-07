import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Josefin Sans";
    src: url("../fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

export default GlobalStyle;
