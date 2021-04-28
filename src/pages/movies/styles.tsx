import styled from 'styled-components'
import banner from '../../assets/img/wallpaper.svg'

export const Container = styled.div`
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 1) 50%
    ),
    url(${banner}) no-repeat center right / auto auto fixed padding-box
      content-box;

  .display {
    display: flex;
    min-height: 70vh;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0;
    }
  }

  .dropdown {
    margin: 30px 100px 20px;
    .dropdown-toggle {
      background-color: black;
      border-color: red;
      color: red;
    }
    .dropdown-item {
      background-color: black;
      border-color: red;
      color: red;
    }
    .dropdown-menu {
      background-color: black;
    }
  }
`
