import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import StarButtons from "./StarButtons";

const Tracks = ({ match }) => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    fetchTracks(token);
    // console.log(match);
  }, []);
  const [tracks, setTracks] = useState([]);

  //   let token =
  //     "BQAi-PyVXSaI9zCP_NIUA9y9HHkKOjjjE2h3-z06jnfublV8Ikh9e4p95HXnkmg3mqSAIA-wkOI7XEUBJZpzl75dJ__sTmi69IPi9RWgrKpgf-tY6MxcTvbUqMnBFkRkCszghNurkpE7GJMwusZWG8lSWPGWp0-5veOMG_4Rv2J0Hg";

  const fetchTracks = async token => {
    let options = {
      method: "GET",
      headers: { Authorization: "Bearer " + token }
    };
    const fetchItem = await fetch(
      "https://api.spotify.com/v1/playlists/" + match.params.id + "/tracks",
      options
    );

    const trackList = await fetchItem.json();
    console.log(trackList.items);
    setTracks(trackList.items);
  };

  const ImagenCancion = styled.img`
    width: 100px;
  `;

  const NombreCancion = styled.h2`
    display: inline-flex;
    color: white;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 50px;
  `;

  const ContenedorHijo = styled.div`
    display: flex;
    /* text-align: center; */
    align-items: center;
    margin-left: 10em;
    margin-bottom: 1.5em;
  `;

  const ContenedorPadre = styled.div`
    margin-top: 2.5em;
  `;

  return (
    <>
      <ContenedorPadre>
        {tracks.map(trackInfo => (
          <ContenedorHijo key={trackInfo.track.id}>
            <ImagenCancion
              src={trackInfo.track.album.images[0].url}
              alt="SIN IMAGEN"
            />
            <NombreCancion>{trackInfo.track.name}</NombreCancion>
            <StarButtons></StarButtons>
          </ContenedorHijo>
        ))}
      </ContenedorPadre>
    </>
  );
};

export default Tracks;
