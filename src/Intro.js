import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import "./App.css";

const Header = props => {
  const Legend = styled.h1`
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-size: 80px;
  `;
  const Description = styled.p`
    color: white;
    font-family: "Fira Sans", sans-serif;
    font-size: 28px;
  `;

  const EnterButton = styled.button`
    width: 28rem;
    height: 60px;
    border-radius: 35px;
    background: #1db954;
    border-style: none;
    font-size: 32px;
    color: white;
    cursor: pointer;
    &:hover {
      background: #1ba94d;
      color: white;
    }
  `;

  const Logo = styled.img`
    width: 200px;
    display: flex;
    align-items: center;
  `;

  return (
    <div className="App">
      <Legend>Welcome to the Spotify Rater</Legend>
      <Logo src="./logo.png" alt="LOGO"></Logo>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, repellat
        minima consequatur doloribus exercitationem molestiae quae possimus
        dicta vel unde, quas accusantium sequi. Modi cum rerum distinctio
        officiis blanditiis accusantium.
      </Description>
      <Link to="/authorize">
        <EnterButton>Rate My Playlist!</EnterButton>
      </Link>
    </div>
  );
};

export default Header;
