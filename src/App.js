import React from 'react'
import Login from './components/login/Login'
import './App.css'
import Navbar from './components/login/Navbar'
import Footer from './components/login/Footer'
import CreatePlaylist from './components/login/CreatePlaylist'
import { AuthProvider } from './components/login/Auth'

function App() {

  return (
   <AuthProvider>
      <div className='App'>
        <Navbar/>
        <main className='App-main'>
          <CreatePlaylist />
          <Login/>
        </main>
        <Footer/>
    </div>
   </AuthProvider>

    
  )
}

export default App
