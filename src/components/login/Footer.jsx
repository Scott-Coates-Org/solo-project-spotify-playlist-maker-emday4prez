import styles from './footer.module.css';
function Footer() {
 const date = new Date();
 const year = date.getFullYear();
  return (
    <footer>
     <p>&copy; {year} </p>

    </footer>
  )
}

export default Footer