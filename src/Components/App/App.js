import React from "react";

import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "Without Me",
          artist: "Eminem",
          album: "The Eminem Show",
          id: 1,
        },
        {
          name: "Till I Collapse",
          artist: "Eminem",
          album: "The Eminem Show",
          id: 2,
        },
        {
          name: "The Real Slim Shady",
          artist: "Eminem",
          album: "The Marshall Mathers LP",
          id: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span class="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
