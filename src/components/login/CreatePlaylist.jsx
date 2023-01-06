import { useAuth } from "./Auth";
import { useState } from "react";
import styles from "./createPlaylist.module.css";
import Form from "./Form";
import ProgressBar from "./ProgressBar";

const spotifyClientKey = process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
if (!spotifyClientKey)
  throw new Error(
    `spotify client key missing. Did you read the issues? If not, visit the Issues page in this repo on GitHub.`
  );

function CreatePlaylist() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Creating Playlist...");
  let retVal;
  const { token } = useAuth();

  if (token) {
    retVal = (
      <div className={styles.container}>
        <h1>Spotify Playlist Generator</h1>
        <p>
          Our playlist generator provides you with just the right music to get
          you in the zone without wasting your time.
        </p>
        <Form
          progress={progress}
          setProgress={setProgress}
          message={message}
          setMessage={setMessage}
        />
        {progress > 0 && (
          <ProgressBar
            progress={progress}
            setProgress={setProgress}
            message={message}
          />
        )}
      </div>
    );
  } else {
    retVal = (
      <div className={styles.container}>
        <h1>Spotify Playlist Generator</h1>
        <p>
          Our playlist make provides you with just the right music to get you in
          the zone without wasting your time.
        </p>
      </div>
    );
  }
  return retVal;
}

export default CreatePlaylist;
