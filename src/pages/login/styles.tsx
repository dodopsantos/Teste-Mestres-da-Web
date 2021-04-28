import styled from 'styled-components'
import banner from '../../assets/img/wallpaper.svg'

export const Container = styled.div`
  height: 100vh;
  animation: backgroundAnimation 3s;

  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 1) 50%
    ),
    url(${banner}) no-repeat center right / auto auto fixed padding-box
      content-box;

  .vert-offset-top-5 {
    padding-top: 15.5em;
  }
  h3,
  p,
  a,
  label {
    color: ${(props) => props.theme.colors.secundary};
  }
  .content {
    animation: contentAnimation 3s;

    a {
      text-decoration: none;
    }

    .forget {
      border-bottom: solid 1px;
      border-color: ${(props) => props.theme.colors.primary};
    }

    .signup {
      color: ${(props) => props.theme.colors.primary};
    }
    .default,
    .submit {
      width: 100%;
      padding: 20px;
      border-radius: 30px;
      border: none;
      font-size: 14px;
    }

    button {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }

  .marvel {
    animation-name: animation;
    animation-duration: 3s;

    display: flex;
    position: absolute;
    top: 10%;
    left: 20%;

    .title {
      height: 399px;
      width: 209px;
      background: linear-gradient(to top, black 80%, red 20%);
      /* display: block; */

      h1 {
        font-weight: bold;
        word-wrap: break-word;
        font-size: 100px;
      }
    }
  }

  @keyframes backgroundAnimation {
    0% {
      background: rgba(255, 255, 255, 0);
    }
    50% {
      background: rgba(255, 255, 255, 0);
    }
  }

  @keyframes contentAnimation {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes animation {
    0% {
      left: 45%;
      top: 30%;
    }
    35% {
      left: 48%;
      top: 30%;
    }
    60% {
      left: 20%;
      top: 30%;
    }
    100% {
      top: 10%;
      left: 20%;
    }
  }
`
