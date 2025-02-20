<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import './SongItem.css'

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
=======
import React from 'react';
import {Link} from 'react-router-dom';

const SongItem = ({image, name, duration, artist, audio, _id, index}) => {
  return (
    <div>
      <Link to={`/song/${_id}`} className='song-item'>
        <div className='song-item__number-album'>
            <p>{index + 1}</p>
            <div>
                <img src={image} alt={`imagem música ${name}`} className='song-item__image'/>

                <p className='song-item__nmae'>{name}</p>
            </div>
        </div>
        <p>{duration}</p>
      </Link>
    </div>
  )
}

export default SongItem
>>>>>>> b634bde1a6682a4746d526380bee6330142d0020
