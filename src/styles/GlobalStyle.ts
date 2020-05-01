import { createGlobalStyle } from 'styled-components'
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
        --background-color: #fafafa;
        --fd-blue: #3897f0;
        --link-color: #003569;
    }

    body {
        background-color: white;
        background-color: var(--background-color);
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
    }

    main {
        animation: fadeInMain 0.5s linear;
    }
    .swal2-popup {
        font-size: 0.8rem;
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