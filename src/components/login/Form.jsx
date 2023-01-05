import React from 'react'
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



const Form = () => (
 <form>
  <Select options={genres} placeholder="Select Genre..."   className={styles.select} />
  <Select options={years} placeholder="Select Year..."   className={styles.select} />
 </form>
  
 
 
)

export default Form