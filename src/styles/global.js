import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0;
    }

    h1,h2,h3,h4,p,button {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #caf0f8;
    }

    a {
        text-decoration: none;
    }
`;
