import styled from "styled-components";

export const Music = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  align-items: center;
  width: 400px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    color: #333333;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 110.5%;
    color: #4f4f4f;
  }

  > :first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  > :last-child {
    width: 50%;
    display: flex;
    justify-self: flex-end;
    flex-direction: column;
    align-items: flex-end;
  }
`;
