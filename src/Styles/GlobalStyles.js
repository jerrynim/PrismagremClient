import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    *{
        box-sizing:border-box;
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        color:${(props) => props.theme.blackColor};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,Arial, sans-serif;
            font-size:14px;
    }
    
    a{
        color:${(props) => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;

export default GlobalStyles;
