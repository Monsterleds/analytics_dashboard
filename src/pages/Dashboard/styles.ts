import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 20px 30px 40px 25px;
  background-color: #fff;
  border-radius: 4px;

  hr {
    border: 1px solid #edeff7;
  }

  h1 {
    margin: 15px;
    color: rgb(60, 64, 84);
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 30px;

  select {
    background: rgb(249, 249, 248);
    padding: 0px 5px;
    width: 60px;
    border: none;
    border-radius: 20px;
    font-weight: 600;

    option {
      background-color: #fff;
      border-radius: 20px;
    }
  }

  p {
    font-weight: 700;
    color: rgb(60, 64, 84);
  }
`;

export const AnalysisContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
`;

export const DataAnalysis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;

  div {
    background-color: rgb(210, 221, 254);
    border-radius: 13px;
    padding: 15px;

    svg {
      transform: rotateY(180deg);
      color: #3163f6;
    }
  }

  p {
    font-weight: 600;
    font-size: 12px;
    color: rgb(176, 183, 205);
  }
`;

export const ContentAnalysis = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerAnalysis = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
