import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #FC9C7C;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1 {
    color: #fafafa;
    font-size: 28px;
    margin: 20px auto;
    text-align: center;
  }

  .container {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    form {
      width: 30%;
    }
  }

  .aside {
    h2 {
      font-size: 16px;
      padding-bottom: 10px;
      color: #fafafa
    }

    button {
      margin: 10px 0;
      width: 100%;
      padding: 10px;
      border: 1px solid #029920;
      border-radius: 4px;
      background: #029920;
      color: #fafafa;
    }
  }

  .main {
    width: 60%;
  }

  .card {
    width: 100%;
    background: #fafafa;
    margin: 20px auto;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  }

  .buttons {
    button {
      border: 1px solid #FC9C7C;
      border-radius: 4px;
      text-decoration: none;
      padding: 10px;
      margin: 5px;
    }
  }

  .formclient {
    label {
      margin-right: 3px;
    }

    button {
      border: 1px solid #FC9C7C;
      border-radius: 4px;
      text-decoration: none;
      padding: 2px;
    }
  }
`;
