import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.25s linear;
  }
  .invincible {
    background-image: ${({ theme }) => theme.backgroundImage};
  }
  .nav-list-mobile {
    background: ${({ theme }) => theme.body};
  }
`