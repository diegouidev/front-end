import styled from "styled-components";
import backgroundImg from '../../assets/background.png'


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 25px;
    margin: 48px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    padding-top: 54px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;