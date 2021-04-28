import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 20px;
  height: 450px;
  width: 300px;
  display: flex;
  align-items: flex-end;

  .content {
    display: block !important;
    width: 100%;
    height: 50%;
    border-radius: 20px;
    padding: 20px 20px 10px 20px;

    background: linear-gradient(
      to top,
      rgba(255, 0, 0, 0.5) 0%,
      rgba(255, 0, 0, 1) 100%
    );

    .heroName {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      height: 15%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 70%;
    }
    .button {
      display: flex;
      justify-content: center;
      height: 15%;
      button {
        font-size: 20px;
        background-color: rgba(255, 0, 0, 0);
        border: none;
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 1) 50%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  .mContainer {
    border-radius: 20px;
    height: 450px;
    width: 700px;
    display: flex;
    /* align-items: flex-end; */
    background: linear-gradient(
      to left,
      rgba(255, 0, 0, 0.5) 0%,
      rgba(255, 0, 0, 1) 100%
    );

    img {
      border-radius: 20px;
    }
  }
  .mContent {
    border-radius: 20px;
    padding: 10% 6%;

    .mHeroName {
      font-size: 30px;
      font-weight: bold;
      height: 15%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mDescription {
      margin: 15px 0;
      font-size: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 70%;
      p {
        margin: 0;
      }
    }
    .mButton {
      display: flex;
      justify-content: flex-end;
      height: 15%;

      button {
        border: solid 3px white;
        padding: 5px 13px;
        font-size: 20px;
        border-radius: 100%;
        background-color: rgba(255, 0, 0, 0);
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
  @media (max-width: 400px) {
    display: none;
  }
`
