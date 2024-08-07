import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 0 0;
  background-color: transparent;
  width: 100%;
  height: 12vh;
`;

export const ContainerModal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContentModal = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3``;

export const Close = styled.div`
  display: flex;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
  }

  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ContainerActions = styled.div`
  display: flex;
  flex: 1;
  margin-top: 12px;
`;
