import React from "react";
import "./App.css";
import Intro from "./Intro";
import SpotifyAuthorize from "./Authorize";
import Playlist from "./Playlist";
import PlaylistDetail from "./Tracks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Background">
        <Switch>
          <Route path="/" exact component={Intro} />
          <Route path="/authorize" component={SpotifyAuthorize} />
          <Route path="/playlist" exact component={Playlist} />
          <Route path="/playlist/:id" component={PlaylistDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
