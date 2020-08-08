import React, { useEffect } from "react";
import { Route } from "react-router-dom";

const SpotifyAuthorize = props => {
  useEffect(() => {}, []);

  let scopes =
    "user-read-private user-read-email playlist-read-private playlist-read-collaborative";
  let my_client_id = "f558f61fe8f64544988e74615f117d84";
  let redirect_uri = "http://localhost:3000/playlist";

  let redirect =
    "https://accounts.spotify.com/authorize" +
    "?response_type=token" +
    "&client_id=" +
    my_client_id +
    (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
    "&redirect_uri=" +
    encodeURIComponent(redirect_uri);

  return (
    <Route
      path="/authorize"
      component={() => {
        window.location.href = redirect;
        return null;
      }}
    />
  );
};

export default SpotifyAuthorize;
