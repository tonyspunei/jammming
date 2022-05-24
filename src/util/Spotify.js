const USER_ACCESS_TOKEN = "";
const CLIENT_ID = "3c54accaa98b444a863b5d42223e40d1";
const REDIRECT_URI = "http://localhost:3000/";

export const Spotify = {
  savePlayList(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const access_token = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    let userId;

    return fetch(`https://api.spotify.com/v1/me`, { headers: headers })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: trackUris }),
              }
            );
          });
      });
  },

  search(searchTerm) {
    const access_token = Spotify.getAccessToken();
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  getAccessToken() {
    if (USER_ACCESS_TOKEN) {
      return USER_ACCESS_TOKEN;
    }

    // check for access token match
    const accessToken = window.location.href.match(/access_token=([^&]*)/g);
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/g);

    if (accessToken & expiresIn) {
      USER_ACCESS_TOKEN = accessToken[1];
      const expiresInSec = Number(expiresIn[1]);

      window.setTimeout(() => (USER_ACCESS_TOKEN = ""), expiresInSec * 1000);
      window.history.pushState("Access Token", null, "/");
      return USER_ACCESS_TOKEN;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
    }
  },
};
