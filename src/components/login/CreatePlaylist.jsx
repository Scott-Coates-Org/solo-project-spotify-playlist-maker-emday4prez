import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import { useAuth } from './Auth';
import styles from './createPlaylist.module.css';
import Form from './Form';

const spotifyClientKey = process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
if (!spotifyClientKey) throw new Error(`spotify client key missing. Did you read the issues? If not, visit the Issues page in this repo on GitHub.`);

function CreatePlaylist() {
  let retVal;
    const { token, setToken } = useAuth();
  if (token) {
    retVal = (
      <div className={styles.container}>
        <h1>Spotify Playlist Generator</h1>
        <p>Our playlist make provides you with just the right music to get you in the zone without wasting your time.</p>
        <Form/>
        <button className={styles.button}>Generate Playlist</button>
     </div>
    );
  } else {
    retVal = (
      <div className={styles.container}>
     <h1>Spotify Playlist Generator</h1>
        <p>Our playlist make provides you with just the right music to get you in the zone without wasting your time.</p>
      </div>
    );
  }
  return retVal;
}

export default CreatePlaylist