import React from 'react'
import './Main.css'
import ItemList from "../ItemList/ItemList.jsx";
import { artistArray } from "../../assets/database/artists.js";
import { songsArray } from "../../assets/database/songs.js";


const Main = () => {
  return (
    <div className='main'>
      {/* Item List de Artistas */}
      <ItemList 
        title="Artistas"
        items={10}
        itemArray={artistArray}
        path="/artists"
        idPath="/artis"
      />

      {/* Item List de Músicas */}
      <ItemList 
        title="Músicas"
        items={20}
        itemArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  )
}
export default Main
