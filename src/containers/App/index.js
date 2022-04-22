// @flow
import React from "react";
import { Routes, Route } from "react-router-dom";
import SideMenu from "../../components/SideMenu";
import Home from "../Home";
import { Flex, Header, Container } from "../../styles/GlobalStyle";

function App() {
  return (
    <Container>
      <SideMenu />
      <Flex>
        <Header>Expense Tracker</Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Flex>
    </Container>
  );
}

export default App;
