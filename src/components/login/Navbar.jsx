import styles from './navbar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';  
import { useAuth } from './Auth';
import { getUserData } from '../../utils/api';
function Navbar() {
  const [userPic, setUserPic] = useState(null)
  const {token} = useAuth();


  useEffect(() => {
     
    if (token) {
    getUserData(token).then((user) => {
        console.log(user)
        setUserPic(user.images[0].url)
      })
    }
  },[token])

 
  return (
    <nav className={styles.navbar}>
      <p>TheCoolMusicCo &trade;</p>
      {userPic && <div className={styles.imgContainer}><img src={userPic} alt="spotify profile" /></div>}
      
    </nav>
  )
}

export default Navbar