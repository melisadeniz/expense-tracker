import React from "react";
import { Container, MenuContainer, MenuImage } from "../styles/SideStyle";

const SideMenu = (props) => {
  return (
    <Container>
      <MenuContainer>
        <a href="/">
          <MenuImage src="images/wallet.png" />
        </a>
      </MenuContainer>
    </Container>
  );
};

export default SideMenu;
