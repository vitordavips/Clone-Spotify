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
