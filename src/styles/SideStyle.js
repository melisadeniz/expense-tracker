import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90px;
  padding-top: 90px;
  box-shadow: 0 3px 6px 0 #555;
`;


export const MenuImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

export const MenuContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 24px;
  margin: 8px 0;
  justify-content: center;
  cursor: pointer;
`;