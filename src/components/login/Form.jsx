import { useRef} from 'react'
import Select from 'react-select'
import styles from './form.module.css'



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



const Form = () => {

const genreRef = useRef();
const yearRef = useRef();

const handleSubmit = (e) => {
  e.preventDefault();

  if(genreRef.current.hasValue() && yearRef.current.hasValue()) {

    let selectedGenre = genreRef.current.getValue()[0].value;
    let selectedYear = yearRef.current.getValue()[0].value;
  console.log('genre/year:', selectedGenre, selectedYear);
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

export default Form