import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Panel>Panneau d'administration</Panel>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 25px;
  background-color: rgba(58, 85, 124, 1);
  color: #fff;
  z-index: 100;
`;

const Panel = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  left: 50%;
  font-size: 12px;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Share Tech Mono", monospace;
  text-decoration: none;
`;

export default Footer;
