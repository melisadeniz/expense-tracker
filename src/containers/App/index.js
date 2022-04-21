// @flow
import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import SideMenu from "../../components/SideMenu";
import Home from "../Home"
import Reports from "../Reports"

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const Flex = styled.div`
  background-color: white;
  margin: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <SideMenu />
      <Flex>
        <Header>Expense Tracker</Header>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        </Routes>
      </Flex>
    </Container>
  );
}

export default App;
