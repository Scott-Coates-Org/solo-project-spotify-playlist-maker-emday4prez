import styles from './navbar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';  
import { useAuth } from './Auth';
import { fetcher } from '../../utils/api';
function Navbar() {
  const [userData, setUserData] = useState('')
  const {token, user} = useAuth();


  useEffect(() => {
      const getUser = async () => {
    const userResponse = await fetcher('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      method: 'GET'
    }); 
    return userResponse  ;
}
    if (token) {
      getUser().then((user) => {
        console.log(user)
        setUserData(user.images[0].url)
      })
    }
  },[token])

 
  return (
    <nav className={styles.navbar}>
     <p>TheCoolMusicCo &trade;</p>
     {token && <div className={styles.imgContainer}><img src={userData} alt="spotify profile" /></div>}
      
    </nav>
  )
}

export default Navbar