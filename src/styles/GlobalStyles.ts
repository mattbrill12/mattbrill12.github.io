import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
      visibility: visible;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background: #FBEFFA;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.primary};
  }

  body.loaded .splash {
    display: none;
  }

  body.modal-open {
    overflow: hidden;
  }
`;
