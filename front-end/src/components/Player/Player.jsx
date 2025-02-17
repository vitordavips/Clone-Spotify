import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

const formatTime = (timeInSeconds) => {
  const minutos = Math.floor(timeInSeconds / 60).toString().padStart(2, '0')
  const seconds = Math.floor(timeInSeconds - minutos * 60).toString().padStart(2, "0")

  return `${minutos}:${seconds}`
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.spit(":")
  const minutos = Number(splitArray[0])
  const seconds = Number(splitArray[1])

  return seconds + minutos * 60
};

const Player = ({durtion, randomIdFromArtist, randomId2FromArtists }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0))
  const durationInSeconds = timeInSeconds(duration)

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setPlaying(!isPlaying)
  }

  useEffect(() => {
      const intervalId = setInterval(() => { 
          if(isPlaying)
              setCurrentTime(formatTime(audioPlayer.current.currentTime))

          progressBar.current.style.setProperty(
              "--_progress",
              (audioPlayer.current.currentTime / durationInSeconds) *  100 + "%"
          )
      }, 1000)

      return () => clearInterval(intervalId)
  }, [isPlaying])

  
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