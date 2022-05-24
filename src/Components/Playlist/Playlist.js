import React from "react";
import { TrackList } from "../TrackList/TrackList";

import "./Playlist.css";

export class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    let value = event.target.value;
    this.props.onNameChange(value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.playlistTracks} />
        <button
          className="Playlist-save"
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        >
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}
