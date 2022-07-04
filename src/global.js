import { createGlobalStyle } from "styled-components";

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
  input[type="email"], input[type="text"], input[type="search"], textarea {
    background: ${({ theme }) => theme.contactFormBg};
  }
  .css-1elwnq4-MuiPaper-root-MuiAccordion-root, .css-67l5gl {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .css-i4bv87-MuiSvgIcon-root {
    color: ${({ theme }) => theme.text};
  }
  .css-vubbuv {
    color: ${({ theme }) => theme.text};
  }
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper, .css-uhb5lp {
    background-color: #00000000;
  }
  .img-icon {
    position: ${({ theme }) => theme.position};
    top: ${({ theme }) => theme.top};
    right: ${({ theme }) => theme.right};
  }
  ul.slick-dots li button:before {
    color: ${({ theme }) => theme.text};
  }
  .slick-prev:before, .slick-next:before {
    color: ${({ theme }) => theme.text};
    position: relative;
    bottom: 55px;
  }
  @media screen and (max-width: 925px) {
    .img-icon {
      position: unset;
      top: 0;
      right: 0;
    }
  }
`;
