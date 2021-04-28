import styled from 'styled-components'
import banner from '../../assets/img/wallpaper.svg'

export const Container = styled.div`
  min-height: 86vh;
  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 1) 50%
    ),
    url(${banner}) no-repeat center right / auto auto fixed padding-box
      content-box;
  display: flex;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0;
    }
  }
`
