import React from 'react'
import './Main.css'
import ItemList from "../ItemList/ItemList.jsx";
import { artistArray } from "../../assets/database/artists.js";
import { songsArray } from "../../assets/database/songs.js";


const Main = () => {
  console.log("Artists:", artistArray);
console.log("Songs:", songsArray);


  // Verificar se os arrays estão carregados
  if(!artistArray?.length || !songsArray?.length){
    return <p>Carregando dados...</p>
  }

  return (
    <div className='main'>
      {/* Item List de Artistas */}
      <ItemList 
        title="Artistas"
        items={10}
        itemArray={artistArray} 
        path="/artists"
        idPath="/artist"
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
