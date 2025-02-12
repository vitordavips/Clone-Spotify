import React from 'react'
import '../Header/Header.css'
import logoSpotify from "../../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={logoSpotify} alt="Logo do Spotify" />
      <a className='header_link' href="/"><h2>Spotify</h2></a>
    </div>
  )
}

export default Header
