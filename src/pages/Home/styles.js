import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  padding-top: 56px;
  text-align: center;

  > h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 36px;
  }
  > li {
    margin-bottom: 24px;
  }
`;

export const Search = styled.ul`
  grid-area: search;
  padding: 64px;

`;

export const Content = styled.div`
  grid-area: content;

  padding: 16px 64px;
  overflow-y: auto;
  
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  ::-webkit-scrollbar-thumb {
    background-color: orange;
    border-radius: 20px;
  }
`;

export const NewNote= styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;