import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchBarResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
        { name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
        { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }
      ],
      playlistName: 'Migos',
      playlistTracks: [
        { name: 'playListName1', artist: 'playListArtist1', album: 'playListAlbum1', id: 1 },
        { name: 'playListName2', artist: 'playListArtist2', album: 'playListAlbum2', id: 2 },
        { name: 'playListName3', artist: 'playListArtist3', album: 'playListAlbum3', id: 3 }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  //adds music to the playlist
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === tracks.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks })
  };

  //removes song from the playlist
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currenetTrack => currenetTrack.id !== track.id);

    this.setState({ playlistTracks: tracks })
  };
  //this edits the name of your playlist
  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  };

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  };

  search(term) {
    console.log(term)
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchBarResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
