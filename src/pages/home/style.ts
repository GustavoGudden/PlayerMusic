import styled from "styled-components";

const media = {
  mobile: "@media(max-width:913px)",
};

export const Main = styled.main`
  display: grid;
  grid-template-columns: 5% 31% 33% 31%;

  ${media.mobile} {
    display: block;
  }
`;

export const DiscorverySection = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  background-color: #ffffff;
  border-right: 1px solid rgba(0, 0, 0, 0.1);

  ${media.mobile} {
    display: none;
  }

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 110.5%;
    color: #333333;
  }

  .DiscoverOption {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    > p {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 110.5%;
    }

    > select {
      color: #828282;
      font-weight: 500;
      font-size: 16px;
      line-height: 110.5%;
      border: none;
    }
  }

  .DiscoverMusics {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1rem;
    padding-left: 1.7rem;
    padding-right: 1.7rem;
    flex-wrap: wrap;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > h1 {
        padding-left: 7px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 110.5%;
        color: #333333;
      }
      > p {
        padding-left: 7px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 110.5%;
        color: #4f4f4f;
      }
    }
  }

  .discoveryMusicsList {
    h1 {
      padding: 1rem;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 110.5%;
      color: #333333;
    }
  }
`;

export const TrackerArea = styled.div`
  padding: 1rem;

  
  ${media.mobile} {
    display: none;
  }

  .Controll {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110.5%;
    color: #333333;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 110.5%;
    color: #828282;
  }

  > :last-child {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      align-items: center;
    }
  }
`;
