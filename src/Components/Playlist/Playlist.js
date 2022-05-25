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
        <input placeholder="New Playlist" onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}
