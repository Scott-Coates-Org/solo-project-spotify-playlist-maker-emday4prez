import React from 'react'
import Select from 'react-select'
import styles from './form.module.css'

const years = [];
const currentYear = new Date().getFullYear();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submit');
};

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



const Form = () => (
 <form onSubmit={handleSubmit}>
  <Select options={genres} placeholder="Select Genre..."   className={styles.select} />
  <Select options={years} placeholder="Select Year..."   className={styles.select} />
  <button className={styles.button} type='submit'>Generate Playlist</button>
 </form>
  
 
 
)

export default Form