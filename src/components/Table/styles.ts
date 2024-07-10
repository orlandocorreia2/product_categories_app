import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: 40px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 16px 0;
`;

export const Title = styled.h2`
  color: #f0f2f5;
`;

export const BtnAdd = styled.div`
  border: 1px solid #f0f2f5;
  border-radius: 4px;
  padding: 8px;
  color: #f0f2f5;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const TableStyled = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TD = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  color: #f0f2f5;
`;

export const TH = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #2f2f2f;
  color: #f0f2f5;
`;

export const TR = styled.tr``;
