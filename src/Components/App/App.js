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
      playlistName: "Any string",
      playlistTracks: [
        {
          name: "La Pieptul Meu",
          artist: "Sebastian Dobrincu",
          album: "Single",
          id: 1,
        },
        {
          name: "Halfway to the Moon",
          artist: "Sebastian Dobrincu",
          album: "Single",
          id: 2,
        },
        {
          name: "On Your Mind (Albwho Remix)",
          artist: "Sebastian Dobrincu",
          album: "Single",
          id: 3,
        },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
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
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              isRemoal={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
