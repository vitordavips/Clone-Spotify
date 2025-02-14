import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Player = ({durtion, randomIdFromArtist, randomId2FromArtists }) => {
  return (
    <div className='player'>
        <div className='player__controllers'>
            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon className='player__icon'/>
            </Link>
        </div>
    </div>
  )
}

export default Player