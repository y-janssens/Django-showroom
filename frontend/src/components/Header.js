import React from "react";
import styled from "styled-components";
import { Link, useNavigate  } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  return (
    <Container>
      <Title>Accueil</Title>
      <Home>
        <Icon>
          <Link to="/home">
          <img src="/static/images/home-icon.png" alt="" />
          </Link>
        </Icon>
      </Home>

      <Nav>
        <Back onClick={() => navigate(-1)}>Retour</Back>
      </Nav>

      <Links>
        <a className="header_link" href="#">
          Messagerie
        </a>
        <a className="header_link" href="#">
          Profil
        </a>
        <a className="header_link" href="#">
          Déconnexion
        </a>
      </Links>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 75px;
  background-color: rgba(58, 85, 124, 1);
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 35%);
  color: #fff;
  z-index: 100;

  a:hover {
    text-decoration: underline;
  }
`;

const Title = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 22px;
  font-family: "Share Tech Mono", monospace;
  letter-spacing: 6px;
  text-align: center;
  justify-content: center;
`;

const Links = styled.div`
  position: absolute;
  top: 50px;
  right: 5px;
  width: 50px;
  display: flex;
  justify-content: flex-end;
`;

const Home = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const Icon = styled.div`
  img {
    position: relative;
    width: 65px;
    height: 65px;
    filter: invert(1);
    transition: 250ms all;
  }

  img:hover {
    transform: scale(1.1);
  }
`;

const Nav = styled.div`
  position: absolute;
  top: 50px;
  left: 70px;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Back = styled.button`
  position: relative;
  margin: 0 10px 0 10px;
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: "Share Tech Mono", monospace;
  text-decoration: none;
  cursor: pointer;

  &:hover {
      text-decoration: underline;
  }
`;

export default Header;
