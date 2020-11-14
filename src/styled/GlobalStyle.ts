import { createGlobalStyle } from 'styled-components'
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        background-color: white;
        background-color: var(--background-color);
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
    }

    @keyframes fadeInMain {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`

export default GlobalStyle;