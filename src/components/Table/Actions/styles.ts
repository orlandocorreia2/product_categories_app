import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 0;
  background-color: transparent;
  width: 100%;
  height: 12vh;
`;

export const Editar = styled.div`
  color: #007bff;
  cursor: pointer;
  margin-right: 8px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Excluir = styled.div`
  color: #dc3545;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
