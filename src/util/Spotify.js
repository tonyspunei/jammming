const USER_ACCESS_TOKEN = "";
const CLIENT_ID = "3c54accaa98b444a863b5d42223e40d1";
const REDIRECT_URI = "http://localhost:3000/"

export const Spotify = {

  getAccessToken() {
    if(USER_ACCESS_TOKEN) {
      return USER_ACCESS_TOKEN;
    }

    // check for access token match
    const accessToken = window.location.href.match(/access_token=([^&]*)/g);
    const expiresIn = window.location.href.match(/expires_in=([^&]*)/g);

    if(accessToken & expiresIn) {
      USER_ACCESS_TOKEN = accessToken[1];
      const expiresInSec = Number(expiresIn[1]);

      window.setTimeout(() => USER_ACCESS_TOKEN = "", expiresInSec * 1000);
      window.history.pushState("Access Token", null, "/");
      return USER_ACCESS_TOKEN;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`
    }
  }
}