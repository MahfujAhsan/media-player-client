import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *{
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color:#0F0F0F;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }

`;