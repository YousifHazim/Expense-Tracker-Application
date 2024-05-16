import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-color: #1a1a1a; /* Dark Gray */
        --primary-color2: rgba(26, 26, 26, 0.6);
        --primary-color3: rgba(26, 26, 26, 0.4);
        --color-green: #32cd32; /* Green */
        --color-grey: #d3d3d3; /* Light Gray */
        --color-accent: #6a0dad; /* Purple */
        --color-delete: #ff4500; /* Red */
    }

    body {
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: var(--color-grey); /* Change text color to light gray for dark mode */
        background-color: var(--primary-color); /* Change background color to dark */
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--color-grey); /* Change heading colors to light gray for better contrast */
    }

    .error {
        color: var(--color-delete); /* Change error color to red */
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(10px);
            }
            50% {
                transform: translateX(-10px);
            }
            75% {
                transform: translateX(10px);
            }
            100% {
                transform: translateX(0);
            }
        }
    }
`;
