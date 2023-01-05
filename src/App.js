
import Login from './components/login/Login'
import './App.css'
import Navbar from './components/login/Navbar'
import Footer from './components/login/Footer'
import CreatePlaylist from './components/login/CreatePlaylist'

function App() {
  return (
   
    <div className='App'>
    <Navbar/>
      <main className='App-main'>
        <CreatePlaylist/>
        <Login/>
      </main>
      <Footer/>
    </div>
    
  )
}

export default App
