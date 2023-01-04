import React from 'react'
import Select from 'react-select'
import styles from './form.module.css'
const options = [
  { value: 'techno', label: 'Techno' },
  { value: 'house', label: 'House' },
  { value: 'disco', label: 'Disco' },
  { value: 'ambient', label: 'Ambient' },
  { value: 'tech house', label: 'Tech House' }
]


const Form = () => (
  <Select options={options} className={styles.select} />
)

export default Form