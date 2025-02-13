import React from 'react';
import './SingleItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import{Link} from 'react-router-dom';

const SingleItem = ({id, name, image, banner, artist, idPath}) => {
  return (
    <Link>
        <div className='single-item__div-image-buttom'>
            <div className='single-item__div-image'>
                <img className='single-item__image' src={image} alt={`Imagem do Artista ${name}`} />
            </div>

            <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
        </div>

        <div className='single-item__texts'>
            <div className='single-item__2lines'>
                <p className='single-item__title'>{name}</p>
            </div>

            <p className='single-item__type'>{artist ?? "Artista"}</p>
        </div>
    </Link>
  )
}

export default SingleItem