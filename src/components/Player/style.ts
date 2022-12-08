import styled from "styled-components";



export const PlayerArea = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  gap: 1rem;
  flex-direction: column;
  background-color: #fafafa;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  

  > h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 110.5%;
    color: #333333;
  }

  .bandInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;
    > div {
      display: flex;
      align-items: center;
      flex-direction: column;

      > h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 110.5%;
        color: #333333;
      }
      > p {
        font-weight: 400;
        font-size: 18px;
        line-height: 110.5%;
        color: #4f4f4f;
      }
    }
  }

  .duracaoArea {
    > div {
      display: flex;
      justify-content: space-between;
    }

    > progress {
      width: 350px;
      height: 3px;
      background-color: #27ae60;
    }
  }

  .playArea {
    display: flex;
    align-items: center;
    gap: 2rem;

    .playbtn {
      height: 64px;
    }

    > img {
      height: 22px;
    }
  }

  .volumeArea {
    display: flex;
    align-items: center;
    gap: 1rem;
    > progress {
      height: 2px;
      background-color: #27ae60;
      width: 200px;
    }
  }

  .foneAlert {
    margin-top: 1rem;
  }
`;
