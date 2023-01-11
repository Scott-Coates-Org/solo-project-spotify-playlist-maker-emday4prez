import { useRef } from "react";
import Select from "react-select";
import styles from "./form.module.css";
import { getUserData } from "../../utils/api";
import { useAuth } from "../login/Auth";
import { fetcher } from "../../utils/api";
const years = [];
const currentYear = new Date().getFullYear();

const genres = [
  { value: "jazz", label: "Jazz" },
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock-n-Roll" },
  { value: "folk", label: "Folk" },
  { value: "country", label: "Country" },
];

for (let i = 0; i < 101; i++) {
  years.push({ value: currentYear - i, label: currentYear - i });
}

const fillPlaylist = async (token, playlistId, tracks) => {
  const response = await fetcher(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uris: tracks,
      }),
    }
  );
  return response;
};
const getTracks = async (token, genre, year) => {
  const searchResults = await fetcher(
    `https://api.spotify.com/v1/search?q=genre:${genre}%20year:${year}&type=track&limit=30`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return searchResults;
};

const selectTracksToAdd = (trackInfoArray) => {
  let totalDuration = 0;
  let tracksToAdd = [];
  for (let i = 0; i < trackInfoArray.length; i++) {
    if (totalDuration + trackInfoArray[i].duration_seconds <= 3600) {
      tracksToAdd.push(trackInfoArray[i].uri);
      totalDuration += trackInfoArray[i].duration_seconds;
    } else {
      break;
    }
  }
  return tracksToAdd;
};

export default function Form({ progress, setProgress, message, setMessage }) {
  const { token } = useAuth();
  const genreRef = useRef();
  const yearRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress((prev) => prev + 10);
    if (genreRef.current.hasValue() && yearRef.current.hasValue()) {
      let selectedGenre = genreRef.current.getValue()[0].value;
      let selectedYear = yearRef.current.getValue()[0].value;

      const userData = await getUserData(token);
      setProgress((prev) => prev + 10);
      const { href } = userData;
      const createEmptyPlaylist = await fetcher(`${href}/playlists`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `The ${selectedGenre} of ${selectedYear}`,
          description: `A playlist of ${selectedGenre} from ${selectedYear}`,
          public: false,
        }),
      });
      const playlistId = createEmptyPlaylist.id;
      setProgress((prev) => prev + 20);
      const tracksResponse = await getTracks(
        token,
        selectedGenre,
        selectedYear
      );
      if (tracksResponse.tracks.items.length === 0) {
        alert("No songs found for this genre and year");
        setProgress(0);
        return;
      }
      setMessage((message) => message + "songs found...");
      setProgress((prev) => prev + 10);
      const trackInfo = tracksResponse.tracks.items.map((track) => {
        return {
          uri: track.uri,
          duration_seconds: Math.floor(track.duration_ms / 1000),
        };
      });
      setProgress((prev) => prev + 20);
      const tracksToAdd = selectTracksToAdd(trackInfo);
      setMessage((message) => message + `${tracksToAdd.length} songs added...`);
      fillPlaylist(token, playlistId, tracksToAdd);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      }, 9000);
    } else {
      alert("Please select a genre and year");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Select
        options={genres}
        placeholder="Select Genre..."
        className={styles.select}
        ref={genreRef}
        isDisabled={progress > 0}
      />
      <Select
        options={years}
        placeholder="Select Year..."
        className={styles.select}
        ref={yearRef}
        isDisabled={progress > 0}
      />
      <button className={styles.button} type="submit">
        Generate Playlist
      </button>
    </form>
  );
}
