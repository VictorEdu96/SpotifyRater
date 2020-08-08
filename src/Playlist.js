import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Playlist = props => {
  useEffect(() => {
    let url = window.location.hash.substr(1);
    let access_token = url.substr(0, url.indexOf("&"));
    let token = access_token.split("=")[1];
    localStorage.setItem("token", token);
    fecthUser(token);
  }, []);

  const [playlist, setPlaylist] = useState([]);

  const fecthUser = async token => {
    let options = {
      method: "GET",
      headers: { Authorization: "Bearer " + token }
    };

    const data2 = await fetch(
      "https://api.spotify.com/v1/me/playlists?limit=50",
      options
    );

    const playlistList = await data2.json();
    // console.log(playlistList.items);
    setPlaylist(playlistList.items);
  };

  const ImagenPlaylist = styled.img`
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  `;

  const NombrePlaylist = styled.h2`
    text-align: center;
    color: white;
  `;

  const ContenedorPlay = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  `;

  const ContenedorHijo = styled.div`
    flex: 1 0 21%; /* explanation below */
    margin: 10px;
    height: 275px;
  `;

  const Paragraph = styled.p`
    font-size: 50px;
    color: white;
    text-align: center;
    font-family: "Fira Sans", sans-serif;
  `;

  return (
    <>
      <Paragraph>List of 50 playlist to choose from.</Paragraph>
      <ContenedorPlay>
        {playlist.map(play => (
          <ContenedorHijo key={play.id}>
            <Link to={`/playlist/${play.id}`}>
              <ImagenPlaylist src={play.images[0].url} />
            </Link>
            <NombrePlaylist>{play.name}</NombrePlaylist>
          </ContenedorHijo>
        ))}
      </ContenedorPlay>
    </>
  );
};

export default Playlist;
