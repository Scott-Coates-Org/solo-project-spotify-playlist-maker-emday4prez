import { useRef} from 'react'
import Select from 'react-select'
import styles from './form.module.css'
import { getUserData } from '../../utils/api';
import { useAuth } from '../login/Auth';
import { fetcher } from '../../utils/api';
const years = [];
const currentYear = new Date().getFullYear();



const genres = [
  { value: 'jazz', label: 'Jazz' },
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock-n-Roll' },
  { value: 'folk', label: 'Folk' },
  { value: 'country', label: 'Country' }
]

for (let i = 0; i < 101; i++) {
  years.push({ value: currentYear - i, label: currentYear - i });
}

export default function Form() {
const {token} = useAuth();
const genreRef = useRef();
const yearRef = useRef();

const handleSubmit = async (e) => {
  e.preventDefault();

  if(genreRef.current.hasValue() && yearRef.current.hasValue()) {

    let selectedGenre = genreRef.current.getValue()[0].value;
    let selectedYear = yearRef.current.getValue()[0].value;
  console.log('genre/year:', selectedGenre, selectedYear);

   const userData = await getUserData(token)
    const {href} = userData;
    const postResponse = await fetcher(`${href}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `The ${selectedGenre} of ${selectedYear}`,
        description: `A playlist of ${selectedGenre} from ${selectedYear}`,
        public: false,
      })
    })
    console.log(postResponse)
  }else {
    alert('Please select a genre and year')
  }
};
return (
  <form onSubmit={handleSubmit}>
  <Select options={genres} placeholder="Select Genre..."   className={styles.select} ref={genreRef} />
  <Select options={years} placeholder="Select Year..."   className={styles.select} ref={yearRef}/>
  <button className={styles.button} type='submit'>Generate Playlist</button>
 </form>
)

  
 
 
}

