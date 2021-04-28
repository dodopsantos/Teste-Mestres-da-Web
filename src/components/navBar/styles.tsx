import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 50px 10px 50px;
  border-bottom: solid 1px;
  border-color: ${(props) => props.theme.colors.primary};

  .logo {
    height: 60px;
    width: 122px;
    background: linear-gradient(to bottom, red 70%, black 30%);

    h1 {
      word-wrap: break-word;
      font-size: 50px;
    }
  }

  .nav {
    div + div {
      margin-left: 10%;
    }
    /* margin-left: 20%; */
  }

  .photo {
    align-items: center;
    a {
      text-decoration: none;
      font-size: 20px;
      color: ${(props) => props.theme.colors.secundary};
    }
  }

  .toggle-button {
    position: absolute;
    top: 0.75rem;
    right: 0rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;

    .bar {
      height: 3px;
      width: 100%;
      background-color: white;
      border-radius: 10px;
    }
  }

  @media (max-width: 400px) {
    .toggle-button {
      display: flex;
    }

    .nav {
      display: none;
    }

    .nav {
      flex-direction: column;
      align-items: flex-end;
      margin-top: 60px;
      width: 100%;
    }

    .photo {
      display: none !important;
    }

    .photo {
      flex-direction: column;
      align-items: flex-end;
      a {
        font-size: 30px;
        font-weight: bold;
        color: ${(props) => props.theme.colors.primary};
      }

      img {
        display: none;
      }
      width: 100%;
    }

    .nav.active {
      display: flex;
    }
    .photo.active {
      display: flex !important;
    }
  }
`
