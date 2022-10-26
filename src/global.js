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
    color: inherit;
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
    width: 100%;
  }
  .direct, .directPrev {
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    padding: 5px 15px;
    padding-right: 18px;
    top: -80px;
    left: 85%;
    font-size: 14px;
  }
  .directPrev {
    left: 135px;
  }
  .loader {
    border: 2px solid ${({ theme }) => theme.body};
    border-top: 2px solid ${({ theme }) => theme.text};
  }
  .styles_scroll-to-top__2A70v {
    border-radius: 12px;
    right: 14px;
    background: #959595;
    box-shadow: none;
    opacity: 0.7;
  }
  .img-icon {
    // position: ${({ theme }) => theme.position};
    // top: ${({ theme }) => theme.top};
    // right: ${({ theme }) => theme.right};
    position: fixed;
    bottom: 35px;
    left: 20px;
    z-index: 1;
    // right: 30px;
  }
  ul.slick-dots li button:before {
    color: ${({ theme }) => theme.text};
  }
  .slick-prev:before, .slick-next:before {
    color: ${({ theme }) => theme.text};
    position: relative;
    bottom: 55px;
  }
  @media screen and (max-width: 745px) {
    .direct, .directPrev {
      left: 42%;
    }
  }
`;
