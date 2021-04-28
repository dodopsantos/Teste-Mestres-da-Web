import styled from 'styled-components'

export const Container = styled.div`
  a {
    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
    text-decoration: none;
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`
