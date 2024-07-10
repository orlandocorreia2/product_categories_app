import styled from "styled-components";
import { Link as LinkReactRouterDom } from "react-router-dom";

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

export const UL = styled.ul`
  list-style: none;
  float: left;
`;

export const LI = styled.li`
  position: relative;
  float: left;
  margin-left: 24px;
  font-size: 18px;
  color: #f0f2f5;
`;

export const Link = styled(LinkReactRouterDom)`
  margin-right: 24px;
  color: #f0f2f5;
`;
