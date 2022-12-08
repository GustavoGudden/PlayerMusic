import styled from "styled-components";

const media = {
  mobile: "@media(max-width:913px)",
};

export const SideHeader = styled.header`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #fafafa;

  ${media.mobile} {
    display: none;
  }

  .NavArea {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      width: 100%;
      justify-content: center;
      padding-bottom: 2rem;
      width: 100%;

      > img {
        width: 32px;
        height: 32px;
      }
    }
  }

  .UserControllArea {
    display: flex;

    flex-direction: column;
  }
`;
