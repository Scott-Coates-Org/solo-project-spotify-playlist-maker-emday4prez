
import Login from './components/login/Login'
import './App.css'
import { AuthProvider } from './components/login/Auth'
import Navbar from './components/login/Navbar'
import Footer from './components/login/Footer'
import CreatePlaylist from './components/login/CreatePlaylist'

function App() {
  return (
    <AuthProvider>
    <div className='App'>
    <Navbar/>
      <main className='App-main'>
        <CreatePlaylist/>
        <Login/>
      </main>
      <Footer/>
    </div>
    </AuthProvider>
  )
}

export default App
